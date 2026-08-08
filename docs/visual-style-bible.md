# UniformEdge — Visual Style Bible

The reference for every image commissioned or generated for the UniformEdge website.
The existing 15 studio images in `public/images/gallery/` define the house style. Everything
new should read as though it came from the same production, shot on a different day.

---

## 1. The established house style

Derived from the existing gallery set — match these, don't reinvent them.

| Attribute | Established standard |
|---|---|
| Background | Seamless mid-grey studio sweep, subtle vertical gradient |
| Lighting | Soft, large-source frontal key; gentle falloff; no hard shadows |
| Camera height | Chest height, straight on — no low hero angles |
| Framing | Full-length, generous headroom, feet fully in frame |
| Pose | Relaxed standing, hands in pockets or at sides, weight on one leg |
| Expression | Natural closed-mouth or light smile — never posed grinning |
| Garment state | Freshly pressed, correctly fitted, tucked, tie properly knotted |
| Colour palette | Navy, maroon, sky blue, white, grey — matches catalogue swatches |
| Retouching | Minimal. Keep skin texture, fabric weave, natural hair flyaway |
| Aspect ratio | 2:3 portrait (1024×1536) for on-model |

### What the existing set already covers

Boys' and girls' formal, junior and senior, blazers, sweaters, sports kits, salwar-kameez, KG.
**Do not re-shoot these.** The 15 combinations in the catalogue's Uniform Styles Gallery are done.

---

## 2. The actual gaps

These are what's missing from the site today, in priority order.

### Gap A — Wide hero compositions
Every existing image is a tight 2:3 portrait. The homepage hero and page heroes need
**16:9 or 21:9 landscape with deliberate empty space** for headline text to sit over.
Currently the homepage hero crops a portrait image into a slot it wasn't composed for.

### Gap B — Fabric and construction detail
There is not a single close-up on the site. This is the biggest credibility gap, because
construction quality is exactly what the Manufacturing page and the "What Makes a High-Quality
School Uniform?" article talk about — and there's no imagery backing it.

### Gap C — Environment / campus context
Every image is studio-isolated. Nothing shows uniforms in an actual school setting, which is
what helps a school administrator picture their own students.

### Gap D — Blog header images
Three articles are live with no header imagery.

---

## 3. Universal negative prompt

Append to every generation.

```
deformed hands, extra fingers, missing fingers, malformed face, asymmetric eyes,
unrealistic eyes, plastic skin, over-smoothed skin, airbrushed, adult-looking child,
incorrect anatomy, distorted proportions, warped garment, impossible seams,
floating accessories, duplicate people, cloned faces, warped text, illegible text,
readable logos, fake school crest, gibberish lettering, excessive blur, heavy vignette,
HDR, oversaturated, CGI render, 3D render, illustration, cartoon, anime, fantasy clothing,
inappropriate pose, fashion-model posing, low resolution, watermark, signature
```

---

## 4. Production-ready prompts

### A1 — Homepage hero, wide with negative space
**Placement:** `components/sections/Hero.tsx` · **File:** `/public/images/hero/hero-campus-wide.png`
**Ratio:** 21:9 (2560×1097) · **Text sits:** left third

```
Photorealistic commercial photograph of three Indian school students aged approximately
9 to 14 — one boy and two girls — standing together in a naturally lit school corridor,
wearing crisp navy-and-white school uniforms: white cotton shirts, navy trousers on the boy,
navy pleated skirts on the girls, maroon ties, black school shoes. Students positioned in the
right third of the frame, the left two-thirds falling away into soft out-of-focus corridor
architecture to leave clean negative space. Natural side light from tall windows, soft and
directional. Relaxed natural posture, quiet confident expressions, looking toward camera.
Realistic cotton fabric texture with natural wrinkle and drape, accurate stitching, correct
collar construction, plain ties with no readable insignia. Professional full-frame camera,
35mm lens, f/4, natural depth of field, colour-accurate, restrained contrast. Authentic Indian
school environment. Believable real-world editorial photograph, not a CGI render.
```
**Alt text:** `Three school students in navy and white UniformEdge uniforms standing in a school corridor`

---

### A2 — Page hero, sports variant
**Placement:** reusable page hero · **File:** `/public/images/hero/hero-sports-wide.png` · **Ratio:** 21:9

```
Photorealistic commercial photograph of a mixed group of four Indian school students aged
approximately 11 to 15 on an outdoor school sports ground, wearing house sports kit: red and
navy moisture-wicking polyester house T-shirts, white sports shorts, navy track pants on two
students, white socks and sports shoes. Students grouped in the right portion of frame, open
sports ground and soft sky filling the left for headline space. Late afternoon natural daylight,
warm and soft, long gentle shadows. Natural athletic posture — standing, one holding a ball at
hip. Realistic technical fabric texture with visible weave, correct seam construction, plain
garments with no readable text or logos. Professional full-frame camera, 50mm lens, f/2.8,
shallow natural depth of field. Authentic Indian school sports ground.
```
**Alt text:** `School students in UniformEdge house sports kit on a school sports ground`

---

### B1 — Fabric weave macro
**Placement:** Manufacturing page, fabric section · **File:** `/public/images/detail/fabric-weave-macro.png`
**Ratio:** 3:2 landscape (1800×1200)

```
Extreme close-up macro photograph of folded school uniform fabric — three stacked swatches in
navy poly-cotton, maroon poly-cotton, and grey melange cotton blend — arranged on a neutral
off-white surface. Visible individual fibres and weave structure, natural fabric texture, soft
natural folds catching raking side light. Shallow depth of field with the front swatch sharp and
the rear falling gently out of focus. Soft diffused daylight from the left. Professional macro
photography, 100mm macro lens, f/5.6, colour-accurate, no text, no labels, no logos.
Premium textile catalogue photography.
```
**Alt text:** `Close-up of navy, maroon and grey school uniform fabric swatches showing weave texture`

---

### B2 — Stitching and collar construction
**Placement:** Manufacturing quality section; header for the quality article
**File:** `/public/images/detail/collar-stitching-detail.png` · **Ratio:** 3:2

```
Extreme close-up photograph of the collar and top button of a crisp white school uniform shirt
laid flat on a soft neutral grey surface. Sharp focus on the collar stitch line and reinforced
button attachment, showing precise even stitching, clean topstitching along the collar edge, and
correct interlining giving the collar structure. Natural cotton weave visible. Soft diffused
studio light from above and left, gentle shadow definition. Shallow depth of field falling off
toward the shirt body. Professional product detail photography, macro lens, f/5.6, colour-accurate,
no text, no logos, no brand markings.
```
**Alt text:** `Close-up of reinforced collar stitching and button on a white school uniform shirt`

---

### B3 — Blazer crest area (crest added later in design)
**Placement:** Products, Blazers category · **File:** `/public/images/detail/blazer-pocket-detail.png` · **Ratio:** 3:2

> **Critical:** generate the blazer pocket **without** any crest or embroidery. The real school
> crest is composited in during design. See §5.

```
Close-up photograph of the breast pocket area of a navy wool-blend school blazer on a plain
neutral background. Clean unadorned pocket with no crest, no badge, no embroidery, no text.
Sharp focus on the pocket edge stitching, lapel roll, and wool-blend fabric texture with visible
twill weave. Soft directional studio light from upper left creating gentle dimensional shadow.
Shallow depth of field. Professional garment detail photography, 85mm lens, f/4, colour-accurate,
premium tailoring catalogue quality.
```
**Alt text:** `Navy school blazer breast pocket showing wool-blend fabric and pocket stitching`

---

### C1 — Classroom context
**Placement:** About page; homepage secondary · **File:** `/public/images/campus/classroom-context.png` · **Ratio:** 3:2

```
Photorealistic documentary-style photograph of six Indian school students aged approximately
8 to 11 seated at desks in a bright, simple classroom, wearing sky-blue shirts, navy trousers and
navy pinafores with maroon ties. Students engaged in classwork, looking down at books or toward
the front — not posed for camera. Natural window light from the left falling across desks. Slight
natural variation in how uniforms sit — one sleeve pushed up, natural creasing at elbows — showing
real wear rather than showroom presentation. Realistic cotton fabric texture and natural drape.
Plain garments with no readable text or crests. Professional full-frame camera, 35mm lens, f/2.8,
natural depth of field, warm neutral colour grade. Authentic Indian classroom, uncluttered.
```
**Alt text:** `Primary school students in sky-blue and navy UniformEdge uniforms working in a classroom`

---

### C2 — Morning arrival, winter uniform
**Placement:** Products, winter wear; seasonal campaigns · **File:** `/public/images/campus/winter-arrival.png` · **Ratio:** 16:9

```
Photorealistic photograph of five Indian school students aged approximately 10 to 16 walking
through a school gate on a cool winter morning, wearing navy wool-blend blazers over sky-blue
shirts, maroon V-neck sweaters visible under two blazers, grey trousers and navy skirts, maroon
ties, black shoes, school bags on shoulders. Natural walking motion, mid-stride, talking to each
other — candid rather than posed. Soft cool morning light with gentle haze, natural long shadows.
Realistic wool-blend and knitwear texture, natural garment drape and movement, correct layering of
sweater beneath blazer. Plain garments, no readable crests or text. Professional full-frame camera,
50mm lens, f/2.8, natural motion, documentary editorial style. Authentic Indian school entrance.
```
**Alt text:** `School students in winter blazers and sweaters arriving at school on a winter morning`

---

### D1–D3 — Blog headers
**Ratio:** 16:9 (1920×1080) each

**D1 · "How Schools Should Choose a Uniform Manufacturer"**
`/public/images/blog/choosing-manufacturer.png`
```
Photorealistic photograph of an organised flat-lay on a neutral desk surface: three folded school
uniform shirts in white, sky blue and navy, a maroon tie, fabric swatch cards in navy and maroon,
and a plain unmarked notebook and pen. Arranged in clean grid composition, shot directly from
above. Soft even diffused daylight, gentle natural shadows. Realistic fabric texture and fold
structure. No text, no writing, no logos, no labels anywhere. Professional editorial flat-lay
photography, colour-accurate, calm neutral palette.
```
**Alt:** `School uniform shirts, tie and fabric swatches laid out for supplier evaluation`

**D2 · "What Makes a High-Quality School Uniform?"** — use **B2** (collar stitching detail).

**D3 · "How to Plan a School Uniform Procurement Process"**
`/public/images/blog/procurement-planning.png`
```
Photorealistic photograph of neatly folded and stacked school uniforms in graduated sizes — from
small child size to senior size — arranged in a rising stack on a clean neutral surface, showing
white shirts, navy trousers and navy skirts. Soft directional daylight from the left, gentle
shadow gradation. Sharp focus across the stack with slight falloff at the rear. Realistic cotton
and terry-cotton fabric texture, crisp fold edges. No text, no labels, no logos.
Professional editorial photography, calm and orderly composition.
```
**Alt:** `Stacked school uniforms in graduated sizes representing a bulk uniform order`

---

## 5. Crest and text rule

Image generators reliably produce garbled text and fake-looking crests. Therefore:

1. **Always generate garments without crests, badges, or lettering.** Every prompt above
   includes explicit negative instruction to this effect.
2. **Composite the real crest in afterwards** during design, using the actual school crest files
   already in `public/images/clients/`.
3. **Never let a generated pseudo-crest ship.** A school administrator recognising a fabricated
   crest on a competitor-looking blazer is a trust failure that is very hard to recover from.

---

## 6. Disclosure

The site currently carries `AIPlaceholderBanner` on Products and Gallery, and an "AI PLACEHOLDER"
chip on each image. **Keep this while imagery is AI-generated.**

The images depict students who do not exist. Presenting them as photographs of real students in
real UniformEdge garments would be a factual misrepresentation to schools making a purchasing
decision — and it's the kind of thing that surfaces at exactly the wrong moment.

Two honest paths as new images are added:

- **Keep disclosure** on anything AI-generated, including all new images above.
- **Retire disclosure only per-image**, as real photography replaces each one — not as a
  blanket removal.

Detail shots (§B) are the strongest candidates for real photography first: they need no
model release, no school access, and can be shot on existing stock with a macro lens.

---

## 7. Implementation notes

| Item | Guidance |
|---|---|
| Format | Convert to `.webp` before committing; keep PNG masters outside the repo |
| Hero budget | ≤ 250 KB after conversion |
| Detail/blog budget | ≤ 150 KB |
| Component | `next/image` with explicit `sizes`; `priority` on the homepage hero only |
| Mobile crop | Heroes are composed with subject right, space left — verify subject survives centre-crop at 375px |
| Naming | `kebab-case`, grouped by purpose: `hero/`, `detail/`, `campus/`, `blog/` |
| Alt text | Describe garment and setting; never start with "Image of" |
