// Nano Banana Pro Featured Prompts Data
const prompts = [
  {
    id: 1,
    title: "Wide quote card with portrait and Chinese/English customization",
    description: "A prompt for generating a wide quote card featuring a famous person's portrait, with a brown background, light-gold serif quote text.",
    prompt: `A wide quote card featuring a famous person, with a brown background and a light-gold serif font for the quote: "{argument name=\"famous_quote\" default=\"Stay Hungry, Stay Foolish\"}" and smaller text: "—{argument name=\"author\" default=\"Steve Jobs\"}." There is a large, subtle quotation mark before the text. The portrait of the person is on the left, the text on the right. The text occupies two-thirds of the image and the portrait one-third, with a slight gradient transition effect on the portrait.`,
    images: [
      "https://cms-assets.youmind.com/media/1763886933714_5zqn1e_G6QBjQHbgAE3Yt_.jpg",
      "https://cms-assets.youmind.com/media/1763886938314_wbcfc7_G6QBiiracAInQ8z.jpg",
      "https://cms-assets.youmind.com/media/1763886941069_1d9ace_G6QBii_acAIRxKd.jpg",
      "https://cms-assets.youmind.com/media/1763886946388_nwahev_G6QBikOaEAAmYkO.jpg"
    ],
    tags: ["quote", "portrait", "ZH"],
    author: "Nicolechan",
    source: "Twitter",
    language: "ZH",
    featured: true
  },
  {
    id: 2,
    title: "Premium liquid glass Bento grid product infographic with 8 modules",
    description: "Create an Infographics with bento grid 8 module layout, user can specify any product name.",
    prompt: `Input Variable: [insert product name]
Language: [insert language]

System Instruction:
Create an image of premium liquid glass Bento grid product infographic with 8 modules (card 2 to 8 show text titles only).
1) Product Analysis:
→ Identify product's dominant natural color → "hero color"
→ Identify category: FOOD / MEDICINE / TECH
2) Color Palette (derived from hero):
→ Product + accents: full saturation hero color
→ Icons, borders: muted hero (30-40% saturation, never black)
3) Visual Style:
→ Hero product: real photography (authentic, premium), 3D Glass version [choose one]
→ Cards: Apple liquid glass (85-90% transparent) with Whisper-thin borders and Subtle drop shadow for floating depth and reflecting the background color
→ Background stays behind cards and high blur where cards are [choose one]:
  - Ethereal: product essence, light caustics, abstract glow
  - Macro: product texture close-up, heavily blurred
  - Pattern: product repeated softly at 10-15% opacity
  - Context: relevant environment, blurred + desaturated
→ Add subtle motion effect
→ Asymmetric Bento grid, 16:9 landscape
→ Hero card: 28-30% | Info modules: 70-72%
4) Module Content (8 Cards):
M1 — Hero: Product displayed as real photo / 3D glass / stylized interpretation (choose one)in beautiful form + product name label
M2 — Core Benefits: 4 unique benefits + hero-color icons
M3 — How to Use: 4 usage methods + icons
M4 — Key Metrics: 5 EXACT data points
Format: [icon] [Label] [Bold Value] [Unit]
FOOD: Calories: [X] kcal/100g, Carbs: [X]g (fiber [X]g, sugar [X]g), Protein: [X]g, [Key Vitamin]: [X]mg ([X]% DV), [Key Mineral]: [X]mg ([X]% DV)
MEDICINE:Active: [name], Strength: [X] mg, Onset: [X] min, Duration: [X] hrs, Half-life: [X] hrs 
TECH:Chip: [model], Battery: [X] hrs, Weight: [X]g,[Key spec]: [value], Connectivity: [protocols]
M5 — Who It's For: 4 recommended groups with green checkmark icons | 3 caution groups with amber warning icons
M6 — Important Notes: 4 precautions + warning icons
M7 — Quick Reference:
→ FOOD: Glycemic Index + dietary tags with icons
→ MEDICINE: Side effects + severity with icons
→ TECH: Compatibility + certifications with icons
M8 — Did You Know: 3 facts (origin, science, global stat) + icons
Output: 1 image, 16:9 landscape, ultra-premium liquid glass infographic.`,
    images: [
      "https://cms-assets.youmind.com/media/1768962051381_l9uih4_537980579-6f29d32a-c786-40c4-bd5a-79c640737496.png",
      "https://cms-assets.youmind.com/media/1768962076321_nu4c5q_537981099-d18d0e38-f7ac-4781-a5da-6d68e2380885.png"
    ],
    tags: ["infographic", "product", "EN"],
    author: "Mansi Sanghani",
    source: "Twitter",
    language: "EN",
    featured: true
  },
  {
    id: 3,
    title: "Hand-drawn style header image prompt from photo",
    description: "Prompt for a hand-drawn style header image of a person introducing Nano Banana Pro",
    prompt: `Completely recreate the uploaded person.
Make it a header image for a note article where that person introduces "Nano Banana Pro".
Aspect ratio: horizontal 16:9.
Style and colors: simple, hand-drawn style, italic, with a blue and green gradient.
Title text: "In-depth explanation of Google's new AI 'Nano Banana Pro'".`,
    images: [
      "https://cms-assets.youmind.com/media/1763885651870_4szbai_G6VZiROagAAqsIh.jpg",
      "https://cms-assets.youmind.com/media/1763885654537_qf6h9o_G6VZiRWaIAA_9x5.jpg"
    ],
    tags: ["header", "hand-drawn", "JA"],
    author: "工藤 晶",
    source: "Twitter",
    language: "JA",
    featured: true
  },
  {
    id: 4,
    title: "Watercolor map of Germany with labeled states",
    description: "A German prompt to generate a watercolor-style map of Germany where all federal states are labeled.",
    prompt: `Generate a map of Germany in watercolor style, on which all federal states are labeled in ballpoint pen.`,
    images: [
      "https://cms-assets.youmind.com/media/1763886061720_fzgqaq_G6RIeSZXgAA7cOf.jpg"
    ],
    tags: ["map", "watercolor", "DE"],
    author: "Florian Gallwitz",
    source: "Twitter",
    language: "DE",
    featured: true
  },
  {
    id: 5,
    title: "New Year's Day Special: Four-Panel Puzzle for 2026 Blessing",
    description: "A detailed multi-panel prompt for Nano Banana Pro, creating a 2x2 grid photo collage.",
    prompt: `[Key: Maintain precise facial features, retain original face structure, the character in the image must be completely consistent with the uploaded reference image] High-end photo studio 2x2 grid photo. Top-left panel (Navy Blue background): The character wears a navy blue uniform-style dress, decorated with gold buttons, vintage curls with a blue beret and pearl earrings. She holds up a huge puzzle piece (top-left piece, with the number "20" on it) with both hands, moving it towards the center of the frame. Her eyes are focused on the central puzzle area, her expression is serious, with a slight smile. The background features navy stripes, an anchor, and the text "Set Sail for the New Year". Top-right panel (Cherry Blossom Pink background): The same woman wears a pink lace dress, a pearl necklace, a princess hairstyle with a pink rose hairpin and crystal earrings. She holds up the top-right puzzle piece (with the number "26" on it) with both hands, moving it towards the center to connect with the top-left piece. Her eyes look at the puzzle seam, her expression is focused and expectant, and her body leans forward. The background features pink cherry blossoms, the text "Beautiful Encounter", butterflies, and petals. Bottom-left panel (Mint Green background): The same woman wears a mint green cotton and linen dress, in an artistic style, with natural long hair, a green hairband, and wooden earrings. She holds up the bottom-left puzzle piece (with the text "New Year's Day" on it) with both hands, moving it upwards to connect with the top-left piece. Her eyes look at the puzzle, her expression is serious, and her mouth is slightly pursed. The background features green plants, the text "Hope Grows", new sprouts, and leaves. Bottom-right panel (Lemon Yellow background): The same woman wears a yellow dress with a sunflower pattern, pigtails with yellow bows. She pushes in the last bottom-right puzzle piece (with the text "Happy" on it) to complete the puzzle. The four pieces perfectly form the complete pattern "2026 New Year's Day Happy" in the center of the frame. She tilts her head back, looking at the completed puzzle, her face beaming with a successful, joyful smile. The center of the frame bursts with golden light and confetti. The background features a yellow sun, the text "Complete Success", smiley faces, and sunflowers. The puzzle pieces converge from the four corners to the center to form a complete picture. Clear makeup, bright ring light, 85mm lens, f/1.8 aperture, four-panel composition with puzzle interaction, fashion magazine style.`,
    images: [
      "https://cms-assets.youmind.com/media/1767455034932_ivuvu0_G9V-MszakAEAIBw.jpg"
    ],
    tags: ["collage", "new-year", "ZH"],
    author: "松果先森",
    source: "Twitter",
    language: "ZH",
    featured: true
  },
  {
    id: 6,
    title: "Vintage Patent Document for an Invention",
    description: "A prompt designed to generate an image of a vintage United States patent document from the late 1800s.",
    prompt: `A vintage patent document for {argument name="invention" default="INVENTION"}, styled after late 1800s United States Patent Office filings. The page features precise technical drawings with numbered callouts (Fig. 1, Fig. 2, Fig. 3) showing front, side, and exploded views. Handwritten annotations in fountain-pen ink describe mechanisms. The paper is aged ivory with foxing stains and soft fold creases. An official embossed seal and red wax stamp appear in the corner. A hand-signed inventor's name and date appear at the bottom. The entire image feels like a recovered archival document—authoritative, historic, and slightly mysterious.`,
    images: [
      "https://cms-assets.youmind.com/media/1766940094520_1mg5pd_G8_m2ZVWEAAMG7y.jpg",
      "https://cms-assets.youmind.com/media/1766940095035_8t8iil_G8_mW4FWwAEwERE.jpg",
      "https://cms-assets.youmind.com/media/1766940095188_kt8ksq_G8_m_7hWoAAw19u.jpg",
      "https://cms-assets.youmind.com/media/1766940096864_fhv4oo_G8_nePrXUAAHvgn.jpg"
    ],
    tags: ["vintage", "patent", "EN"],
    author: "Alexandra Aisling",
    source: "Twitter",
    language: "EN",
    featured: true
  },
  {
    id: 7,
    title: "Chalkboard-style AI news summary",
    description: "A Japanese prompt for turning AI news content into a hand-drawn, teacher-style chalkboard diagram.",
    prompt: `Using the following content, summarize the news in a chalkboard-style, hand‑written look, and break it down with diagrams and easy‑to‑understand expressions as if a teacher had written it.
---
Search results from Grok`,
    images: [
      "https://cms-assets.youmind.com/media/1763885620059_vzaj75_G6WfVvIbAAEgvYg.jpg",
      "https://cms-assets.youmind.com/media/1763885622901_pk1vka_G6P2CkracAINIfP.jpg"
    ],
    tags: ["chalkboard", "education", "JA"],
    author: "ひでもん | AI開発@ニュース発信",
    source: "Twitter",
    language: "JA",
    featured: true
  },
  {
    id: 8,
    title: "Detailed mirror-selfie otaku room scene",
    description: "A very detailed Nano Banana prompt describing a female mirror selfie in a blue-toned otaku computer corner.",
    prompt: `### Scene
Mirror selfie in an otaku-style computer corner, blue color tone.

### Subject
* Gender expression: female
* Age: around 25
* Ethnicity: East Asian
* Body type: slim, with a defined waist; natural body proportions
* Skin tone: light neutral tone
* Hairstyle:
    * Length: waist-length hair
    * Style: straight with slightly curled ends
    * Color: medium brown
* Pose:
    * Stance: standing in a slight contrapposto pose
    * Right hand: holding a smartphone in front of her face (identity hidden)
    * Left arm: naturally hanging down alongside the torso
    * Torso: body leaning slightly back; waist and abdomen exposed
* Clothing:
    * Top: light blue cropped knit cardigan, top two buttons fastened; a blue French-style bra faintly visible
    * Bottom: denim ultra-short shorts, with a blue satin ribbon bow on each side of the hips
    * Socks: blue and white horizontal striped over-the-knee socks
    * Accessory: a blue cute mascot phone case

### Environment
* Description: bedroom computer corner seen through a wall-mounted mirror
* Furnishings:
    * White desk
    * Single monitor showing a soft blue wallpaper (no readable text)
    * Mechanical keyboard with white keycaps on a blue desk mat
    * Mouse on a small blue mouse pad
    * PC tower on the right side with blue case lighting
    * Three anime figures on or near the PC tower
    * A poster of a pagoda on the wall
    * Cat-shaped desk lamp with blue accents
    * A transparent glass of water
    * A tall green leafy plant by the window (on the left side of the frame)
* Color replacement: replace all originally pink elements (clothes and room decor) with blue tones (baby blue to sky blue/periwinkle blue).

### Lighting
* Light source: daylight coming from a large window on the left side of the camera, through sheer curtains
* Light quality: soft, diffused light
* White balance (K): 5200

### Camera
* Mode: smartphone rear camera shooting via the mirror (no portrait/bokeh mode)
* Equivalent focal length (mm): 26
* Distances (m):
    * Subject to mirror: 0.6
    * Camera to mirror: 0.5
* Exposure:
    * Aperture (f): 1.8
    * ISO: 100
    * Shutter speed (s): 0.01
    * Exposure compensation (EV): -0.3
* Focus: focus on the torso and shorts in the mirror image
* Depth of field: natural smartphone deep depth of field; background clearly visible with no artificial blur
* Composition:
    * Aspect ratio: 1:1
    * Crop: from the top of the head to mid-thigh; include the desk, monitor, PC tower, and plant in the frame
    * Angle: slightly high angle from the mirror's point of view
    * Composition note: keep the subject centered; to avoid wide-angle edge distortion, have her stand a bit further away and crop to a square later.

### Negative prompts
* Any appearance of pink/magenta anywhere
* Beauty filters/over-smoothed skin; poreless skin look
* Exaggerated or distorted anatomy
* NSFW, see-through fabrics, wardrobe malfunctions
* Logos, brand names, or readable user interface text
* Fake portrait-mode blur, CGI/illustration feel`,
    images: [
      "https://cms-assets.youmind.com/media/1763889946850_689z0h_G23i3sJW0AASGUw.jpg"
    ],
    tags: ["mirror-selfie", "otaku", "ZH"],
    author: "宝玉",
    source: "Twitter",
    language: "ZH",
    featured: true
  }
];
