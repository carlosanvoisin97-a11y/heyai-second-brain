#!/usr/bin/env python3
"""
generate_icons.py — Genera le 16 icone 3D per il sito Futuritaly
trasformando le 16 icone 2D di brand in versione 3D via Gemini 2.5 Flash Image (nanobanana).

Uso:
  python3 generate_icons.py --pilot                  # 4 generation (Difesa + Capitale Umano × 2 stili)
  python3 generate_icons.py --batch --style A        # 16 icone stile Clay Premium
  python3 generate_icons.py --batch --style B        # 16 icone stile Crystal/Glass
  python3 generate_icons.py --batch --style B --only 03-finanziario,11-food   # recovery selettivo

Setup (una sola volta):
  1. Apri Terminale, naviga in questa cartella
  2. Imposta la chiave: export GEMINI_API_KEY="la-tua-chiave"
     (oppure crea un file .env in questa cartella con: GEMINI_API_KEY=la-tua-chiave)
  3. Lancia il primo comando — installa da solo le dipendenze
"""

import argparse, os, sys, time, subprocess
from pathlib import Path

# === Bootstrap: usa un virtualenv isolato per evitare conflitti namespace google.* ===
# Se non stiamo già girando dentro il venv locale, lo creiamo (se manca) e ri-eseguiamo.
SCRIPT_DIR_BOOT = Path(__file__).resolve().parent
VENV_DIR = SCRIPT_DIR_BOOT / ".venv"
VENV_PY = VENV_DIR / "bin" / "python3"

def bootstrap_venv():
    if Path(sys.executable).resolve() == VENV_PY.resolve():
        return  # già nel venv
    if not VENV_PY.exists():
        print("Creo virtualenv isolato (.venv/) una sola volta...")
        subprocess.check_call([sys.executable, "-m", "venv", str(VENV_DIR)])
        print("Installo dipendenze nel venv...")
        subprocess.check_call([str(VENV_PY), "-m", "pip", "install", "-q", "--upgrade", "pip"])
        subprocess.check_call([str(VENV_PY), "-m", "pip", "install", "-q", "google-genai", "pillow"])
    # Ri-esegue lo script dentro il venv, passando gli stessi argomenti
    os.execv(str(VENV_PY), [str(VENV_PY), __file__] + sys.argv[1:])

bootstrap_venv()

from google import genai
from PIL import Image
from io import BytesIO

# === Configurazione ===
SCRIPT_DIR = Path(__file__).resolve().parent
SRC_DIR = SCRIPT_DIR / "01-Source-2D"
PILOT_DIR = SCRIPT_DIR / "02-Output-Pilot"
BATCH_DIR = SCRIPT_DIR / "03-Output-Batch"
MODEL_NAME = "gemini-3-pro-image-preview"  # top tier (alternativa veloce: gemini-2.5-flash-image)

def get_api_key():
    key = os.environ.get("GEMINI_API_KEY", "").strip()
    if key:
        return key
    env_file = SCRIPT_DIR / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            if line.strip().startswith("GEMINI_API_KEY="):
                return line.split("=", 1)[1].strip().strip('"').strip("'")
    sys.exit("ERRORE: GEMINI_API_KEY non trovata.\n"
             "  Opzione 1: export GEMINI_API_KEY='la-tua-chiave'\n"
             "  Opzione 2: crea un file '.env' qui dentro con: GEMINI_API_KEY=la-tua-chiave")

# === Mappa icona → descrizione concettuale (preserva simbolo originale) ===
ICON_CONCEPTS = {
    "01-difesa": "a shield with a bold checkmark inside — defense",
    "02-sicurezza": "a shield with a padlock inside — security",
    "03-finanziario": "a stack of coins next to a calculator with a small pie-chart icon — finance",
    "04-energia-e-ambiente": "a lightbulb containing a green leaf, with light rays around it — energy and environment",
    "05-immobiliare": "a small house resting on an open hand — real estate",
    "06-sport": "a basketball and an american football overlapping, crossed — sport",
    "07-terzo-settore": "two hands clasped in a handshake — third sector / non-profit",
    "08-capitale-umano": "three small abstract human figures held in two open hands cupped upward — human capital",
    "09-turismo": "a stylized globe with a small camera in front of it — tourism",
    "10-infrastrutture": "a four-quadrant grid showing two tall office buildings, a small house, and a tree — infrastructure",
    "11-food": "a dinner plate with a fork on the left and a knife on the right, top-down view — food",
    "12-salute": "two open hands cradling a medical cross symbol — healthcare",
    "13-agricoltura": "three stylized wheat ears standing upright side by side — agriculture",
    "14-tech": "a hand with index finger raised, pointing at a cursor or interface — technology",
    "15-automotive": "the front view of a stylized car (windshield + headlights + grille) — automotive",
    "16-navale": "the front view of a large cargo ship floating on stylized water waves — naval",
    # === Asset extra (motivi grafici Futuritaly + pittogrammi BGL) ===
    "17-time-on-target": "a stylized archery target — concentric circles bullseye (alternating vibrant blue and white rings) with a single arrow striking the very center — 'Time on Target' / precision strategic goal",
    "18-bussola": "the FuturItaly brand compass / wind rose: a solid round central disc/badge in the middle, surrounded by a star-shaped multi-rayed wind rose (8-12 elongated diamond-shaped rays radiating outward from the center). An outer thin circle wraps the whole composition, with small dot markers placed at regular intervals along the perimeter as cardinal indicators. Clean, geometric, premium institutional look. (DO NOT add any text or letters)",
    "19-pianeta-puzzle": "an Earth globe constructed entirely from interlocking jigsaw puzzle pieces — symbol of complex global strategy, problem-solving and the world as a system of interconnected pieces. Show clear puzzle seam lines on a clean spherical Earth",
    "20-italia-stripes": "the boot-shaped silhouette of Italy (including Sicily and Sardinia) constructed ENTIRELY from a stack of SEPARATE horizontal bars / stripes of varying lengths (like horizontal blinds or barcode) — the bars together approximate the country outline but the shape is CLEARLY VISIBLE as discrete parallel horizontal stripes with white gaps between them, NOT a continuous solid silhouette. Each stripe should remain visually distinct in the 3D glass rendering — they can become individual floating glass bars",
    "21-freccia-destra": "a single bold arrow pointing to the right (with shaft + arrowhead) — directional 'forward' indicator",
    "22-lente": "a magnifying glass frame — only the empty circular metal ring (the lens bezel) + the angled handle attached to it, WITHOUT any glass lens inside the ring (the center of the circle must be COMPLETELY EMPTY / SEE-THROUGH, just an open hollow ring). The handle points to the LOWER-RIGHT (tilted at about 30 degrees to the right). Think of it as just the empty frame of a magnifying glass, no actual lens inside",
    "23-target-freccia": "a circular concentric target (bullseye, 3 rings) with a small arrow striking the exact center — symbol of precision and strategic goal",
    "24-globo": "a stylized Earth globe with longitude and latitude meridian grid lines visible — symbol of global reach and worldwide perspective",
    "25-gear": "a single mechanical gear / cogwheel viewed front-on — symbol of operations, mechanics, system",
    "26-lampadina": "a lightbulb with short light rays radiating outward from the bulb top — symbol of idea, insight, innovation",
    "27-grafico-barre-su": "a small vertical bar chart of three or four bars of increasing height, with a curved upward-pointing arrow rising above and to the right of the bars — symbol of growth, positive trend, success",
    # === 3 reference originali (già in 3D nello stile clay/matte, da trasformare in Glass) ===
    "28-fig-umane-3d": "three abstract simplified human figures (people pictograms) standing close together as a small group, each figure shaped like a capsule with a spherical head and a half-pill body. The composition shows one figure slightly behind in the center and two in front-left and front-right — symbol of human capital, community, group",
    "29-grafico-3d": "a 3D vertical bar chart with five rectangular bars of progressively increasing height arranged left-to-right, all in solid blue, set against a light gridded back wall and floor (slight isometric perspective showing depth) — symbol of growth, data, positive trend",
    "30-bussola-classica": "a classic round nautical compass — circular polished outer casing with a small attached loop at the top (lanyard ring), a clean white circular dial face showing the cardinal direction letters N, E, S, W around the edge and a slim 4-pointed compass needle in blue at the center — symbol of navigation, direction, precision",
    # === Asset hero sezione "pubblico vs privato" (text-only, NO source image) ===
    "31-ente-pubblico": "a stylized neoclassical institutional building — front view of a temple-like edifice with a triangular pediment supported by a row of four to six tall fluted classical columns (Doric or Corinthian capitals), wide steps leading up to the entrance. Reminiscent of the Pantheon, an Italian institutional building, or a classical civic temple. Symbol of public sector and institutions — dignified, civic, NEUTRAL (NOT politically marked, NOT a parliament chamber, NOT obviously a specific landmark)",
    "32-ente-privato": "a stylized modern corporate skyscraper / office tower — a tall slender high-rise rectangular building viewed slightly from below with a regular grid of windows on the facade, contemporary glass-and-steel architecture style. Clean vertical proportions, no other buildings around. Symbol of private sector, corporate business, modern industry",
}

# === Prompt master per i due stili ===
STYLE_A_CLAY = """Transform the attached 2D line-art icon into a premium 3D rendered icon.

STYLE: Soft 3D "clay" icon — smooth matte silicone-like finish, slightly rounded volumetric forms, contemporary product design aesthetic (like Apple iOS settings 3D icons, Notion, or Stripe illustrations).

CONCEPT TO PRESERVE EXACTLY: {concept}. Keep the same symbol, composition and visual hierarchy as the reference image — do NOT redesign the symbol, just render it in three dimensions.

COLOR: Monochromatic deep royal blue (hex #3D70ED — vibrant Savoy blue) for the main body, with subtle darker shade (#003869) on shaded sides for depth. White accents (#FFFFFF) where the original 2D icon uses lighter or accent strokes.

LIGHTING: Soft studio lighting from upper-left, gentle ambient occlusion, soft drop shadow below the object.

COMPOSITION: Slight isometric tilt (about 15-20 degrees), object centered and floating in frame, with comfortable padding around the edges.

BACKGROUND: Pure white seamless background (#FFFFFF). Nothing else.

STRICT RULES: NO text, NO labels, NO captions, NO watermarks, NO UI elements, NO borders, NO frames. Only the 3D icon, centered, isolated on white.

Output: square 1:1 aspect ratio."""

STYLE_B_GLASS = """Transform the attached 2D line-art icon into a premium 3D rendered icon.

STYLE: Translucent crystal / liquid glass 3D icon — the object looks like polished glass or transparent acrylic with vibrant liquid blue trapped inside. Apple Vision Pro / Liquid Glass aesthetic, premium tech product look.

CONCEPT TO PRESERVE: {concept}. The symbolic meaning and the key visual elements of the reference 2D icon must be recognizable — but you have CREATIVE FREEDOM on composition, scale, spacing, and spatial arrangement to make the 3D rendering look beautiful and elegant. If two elements overlap awkwardly in the 2D source (e.g., a small symbol overlapping a larger background shape), feel free to reposition, rescale, simplify, or restructure them so the 3D result reads clean and premium. The goal is a beautiful, distinctive 3D icon — NOT a literal 1:1 3D copy of the 2D source. Aesthetic quality of the 3D rendering takes priority over strict fidelity to the original layout.

COLOR: Semi-transparent glass body with an internal vibrant blue gradient flowing from #3D70ED (Savoy blue, lighter highlight side) to #003869 (deep navy blue, darker side). Crisp white specular highlights at glass edges and curves; subtle caustics where light refracts through the glass.

LIGHTING: Studio key light from upper-left producing sharp specular highlights, soft fill light, visible light refraction inside the glass.

COMPOSITION: Slight three-quarter view, object centered and floating with a soft, slightly blurred, low-opacity ground shadow directly below.

BACKGROUND: Pure white seamless background (#FFFFFF). Nothing else.

STRICT RULES: NO text, NO labels, NO captions, NO watermarks, NO UI elements, NO borders, NO frames. Only the 3D icon, centered, isolated on white.

Output: square 1:1 aspect ratio."""

STYLE_C_CERAMICA = """Generate (or transform the attached 2D reference into) a premium 3D ceramic-style rendered icon, fully coherent with the existing FuturItaly homepage hero asset (the white-and-blue ceramic puzzle-globe).

STYLE: 3D ceramic / fine porcelain finish — smooth, very slightly glossy but NOT glassy or transparent. Solid opaque ceramic material, subtle soft surface highlights, gentle self-shadowing. Think of fine bone china, premium ceramic homeware, or institutional sculptural objects. Refined, sober, premium, not flashy.

CONCEPT TO PRESERVE: {concept}. The symbolic meaning and the key visual elements of the reference must be recognizable. You have CREATIVE FREEDOM on composition, scale, spacing, and spatial arrangement to make the 3D rendering look beautiful and natural. If two elements overlap awkwardly in the 2D source, feel free to reposition, rescale or simplify them. Aesthetic quality of the 3D rendering takes priority over strict 1:1 fidelity.

COLOR: Two-tone ceramic palette mirroring the puzzle-globe in the site — main body / negative space in matte CREAM-WHITE ceramic (#F8F4EC), with the "filled" or "feature" parts of the icon rendered in solid deep ROYAL BLUE ceramic (#3D70ED Savoy blue, matte, slightly desaturated). The blue and white must be CERAMIC SOLID, not glass, not metallic, not glossy plastic.

LIGHTING: Soft diffused studio lighting from upper-left. Gentle ambient occlusion. Soft cast shadow on the ground directly below (subtle, not harsh).

PERSPECTIVE: Slight three-quarter view (about 15-20 degrees tilt), object centered and floating in frame with comfortable padding.

BACKGROUND: Pure white seamless (#FFFFFF). Nothing else.

STRICT RULES: NO text, NO labels, NO captions, NO watermarks, NO UI elements, NO borders, NO frames, NO transparency, NO glass effect, NO heavy reflections. Solid opaque ceramic only. Square 1:1 aspect ratio. Institutional and refined — not playful or cartoonish."""

STYLE_PROMPTS = {"A": STYLE_A_CLAY, "B": STYLE_B_GLASS, "C": STYLE_C_CERAMICA}
STYLE_NAMES = {"A": "Clay", "B": "Glass", "C": "Ceramica"}


def generate_one(client, icon_path, concept, style, out_path, max_retries=3):
    """Genera una singola icona 3D con retry esponenziale. Se icon_path non esiste, usa solo testo."""
    prompt = STYLE_PROMPTS[style].format(concept=concept)
    contents = [prompt]
    if icon_path and Path(icon_path).exists():
        contents.append(Image.open(icon_path))
    last_err = None
    for attempt in range(max_retries):
        try:
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=contents,
            )
            for part in response.candidates[0].content.parts:
                if part.inline_data and part.inline_data.data:
                    Image.open(BytesIO(part.inline_data.data)).save(out_path)
                    return True
            last_err = "no image in response"
        except Exception as e:
            last_err = str(e)[:120]
        time.sleep(2 ** attempt)
    print(f"      [fail: {last_err}]", end=" ")
    return False


def run_pilot(client):
    PILOT_DIR.mkdir(exist_ok=True)
    pilot_icons = ["01-difesa", "08-capitale-umano"]
    print(f"\nPILOT — {len(pilot_icons)} icone × 2 stili = {len(pilot_icons)*2} generation\n")
    for icon_name in pilot_icons:
        src = SRC_DIR / f"{icon_name}.png"
        concept = ICON_CONCEPTS[icon_name]
        for style in ["A", "B"]:
            out = PILOT_DIR / f"{icon_name}-{style}-{STYLE_NAMES[style].lower()}.png"
            print(f"  > {icon_name} stile {style} ({STYLE_NAMES[style]})... ", end="", flush=True)
            ok = generate_one(client, src, concept, style, out)
            print("OK" if ok else "FAIL")
    print(f"\nOutput pilot: {PILOT_DIR}")
    print("Guarda le 4 immagini e scegli la direzione (A o B) per il batch.")


def run_batch(client, style, only=None):
    out_dir = BATCH_DIR / f"stile-{style}-{STYLE_NAMES[style].lower()}"
    out_dir.mkdir(parents=True, exist_ok=True)
    targets = [k for k in ICON_CONCEPTS.keys() if (not only or k in only)]
    print(f"\nBATCH — {len(targets)} icone, stile {style} ({STYLE_NAMES[style]})\n")
    ok_count, failed = 0, []
    for i, icon_name in enumerate(targets, 1):
        src = SRC_DIR / f"{icon_name}.png"
        out = out_dir / f"{icon_name}-3D.png"
        print(f"  [{i:2d}/{len(targets)}] {icon_name}... ", end="", flush=True)
        if generate_one(client, src, ICON_CONCEPTS[icon_name], style, out):
            ok_count += 1
            print("OK")
        else:
            failed.append(icon_name)
            print("FAIL")
    print(f"\nRisultato: {ok_count}/{len(targets)} OK")
    if failed:
        print(f"Falliti: {', '.join(failed)}")
        print(f"Recovery: python3 {sys.argv[0]} --batch --style {style} --only {','.join(failed)}")
    print(f"\nOutput: {out_dir}")


def main():
    p = argparse.ArgumentParser(description="Genera icone 3D Futuritaly via Gemini nanobanana")
    p.add_argument("--pilot", action="store_true")
    p.add_argument("--batch", action="store_true")
    p.add_argument("--style", choices=["A", "B", "C"])
    p.add_argument("--only", help="Lista CSV di icone da rigenerare (recovery)")
    args = p.parse_args()

    if not (args.pilot or args.batch):
        p.print_help()
        sys.exit(0)
    if args.batch and not args.style:
        sys.exit("ERRORE: --batch richiede --style A o --style B")

    client = genai.Client(api_key=get_api_key())
    print(f"Connesso a Gemini API ({MODEL_NAME})")

    if args.pilot:
        run_pilot(client)
    else:
        only = set(args.only.split(",")) if args.only else None
        run_batch(client, args.style, only)


if __name__ == "__main__":
    main()
