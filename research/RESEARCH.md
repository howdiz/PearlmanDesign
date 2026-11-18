# Pearlman Design LLC: website research

Compiled 2026-10-11. Sources: Instagram @pearlman_design_llc (all 253 posts scraped), BBB, BuildZoom, Houzz, HomeAdvisor (via search snippet), Yahoo Local.

## Business facts (verified across sources)

| Item | Value | Source |
|---|---|---|
| Legal / trade names | Pearlman Design LLC; "S Pearlman Design, LLC"; earlier brand "Pearlman Contracting" (Instagram hashtags 2016-2018, "#pearlmancontracting") | BBB, HomeAdvisor, Instagram |
| Owner | Seth Pearlman | BBB |
| Phone | (609) 744-4726 | BBB, Instagram, logo banner |
| Town | Voorhees, NJ 08043 (street address conflicts across listings, so show town only) | BBB, BuildZoom |
| Started | BBB says 2017-04-02 (LLC). A March 2021 post says "We have been using Schluter Systems for 12 years", so Seth has worked in the trade since ~2009. Instagram history starts ~2013. | BBB, Instagram |
| NJ HIC license | 13VH09852100 (active per BuildZoom, Sept 2026). NJ requires the registration number on advertising. | BuildZoom |
| BBB | A+ rating, not accredited, 0 complaints | BBB |
| Reviews | 4.9/5 on HomeAdvisor from 9 verified reviews; reviewers praise timeliness and cleanliness. Review text not retrievable (403), so **do not invent testimonials**. | HomeAdvisor (search snippet) |
| Policies | Free estimates; accepts credit cards; "we have workers' compensation" (Instagram hashtag, repeated) | search summary, Instagram |
| Email / website / Facebook URL | **Unknown.** Banner shows FB + IG icons. Ask the client. | |

### Positioning copy (client's own words)
- Instagram bio: "We are a full service construction company focusing on mid to high end remodeling. Family owned and operated we treat you like part of ours."
- Tagline on logo / banner / shirts: **"from concept to completion"**
- Recurring hashtag: **#wedoitright** ("We do it right")
- Yahoo listing: "We specialize in custom home remodeling for any part of your home."
- Post: "Our biggest and best to date. We love a challenge!! I think this proves we can handle any job out there. Let us help build your DREAM HOME TODAY!"
- Post: "I love my job!! Love to give people their dream spaces!!"
- Post: "I love doing work for friends of mine. I know that they are going to get the best products, advice and work that we can provide."

### Brand / logo
Logo seen on dumpster banner (`instagram/img/CHSpF49gKct_0.jpg`), shirts (`BtqsvRPHuRZ_0.jpg`), truck (`BthP7k9HDOa_0.jpg`):
"PEARLMAN" in black humanist sans (Gill Sans-like), over a black band reading "DESIGN" with "LLC" in small caps, a handsaw on the left and a claw hammer on the right; under it "from concept to completion" and the phone number. Black, white and warm cream (the tool illustrations are cream/tan). No vector logo is available, so the site must recreate it as a wordmark (do not trace or fake the illustrations). Ask the client for the original file.

### Services (Houzz + BuildZoom + Instagram evidence)
Core: kitchen remodeling, bathroom / master bath remodeling (steam showers, heated floors, custom tile, Schluter waterproofing), basement finishing (incl. basement bathrooms, underpinning), whole-house renovations, additions (incl. second-story "rooftop extension"), decks and outdoor kitchens (PVC/composite, cable rail, hot tubs), custom carpentry and built-ins (mudrooms, bench seats, offices, wine wall, bunk beds), trim and millwork (board and batten, wainscoting, curved walls), flooring (hardwood, LVP, tile, curved stair nosing), laundry rooms, light commercial (audiology office, JCC men's spa hot tub, restaurant buildout per BuildZoom).

### Service area
Camden / Burlington County core: Voorhees, Cherry Hill, Haddonfield, Moorestown, Marlton, Mount Laurel, Collingswood, Haddon Heights, Medford. Instagram shows jobs at the shore (Margate), Princeton, and Short Hills.

### Trade partners named in posts (use only with client OK)
Widell + Boschetti (designer: office, wine wall, graffiti bath, bunk beds), Adler Design / Candice Adler Design (interior design), Absolute Marble & Granite, Weinstein Supply (Collingswood), Avalon Flooring, Schluter Systems, Steamist, Brizo / Delta, Moen, Nuheat.

## Instagram archive
- `instagram/posts.json`: all 253 posts (code, type, caption, image/video URLs)
- `instagram/captions.txt`: one line per post
- `instagram/img/<code>_<n>.jpg`: 466 images, max 1080px (Instagram compression). Reels contribute their cover frame only.
- About 80 posts are personal/family (kids, birthdays, sports, travel). **Never use these on the site.** The excluded list is in `scripts`/this doc's curation below; `project_candidates.json` lists the 173 non-personal posts.

## Curated projects (best photos; ordered best-first within each)

| # | Project (working title) | Category | Location | Images | Notes from caption |
|---|---|---|---|---|---|
| 1 | Custom deck with outdoor kitchen and hot tub | Decks & Outdoor | South Jersey | B1KV7VxAS2C_0,1,2,3,6,7, B1KW_QXgyF6_0,1,4 | "From the hot tub to the kitchen to the wire rails... It's all in the details." |
| 2 | Designer home office | Custom Carpentry | | BvZeZNNns___1,2,3,0 (+ process 4,5) | Custom cabinets, paint; design by Widell + Boschetti |
| 3 | Two-unit gut renovation | Whole-House | | CvhvBeTu_4d_3,4,5,6,7,9 (+ before 0,1,2) | "We had to rebuild the foundation... all new electrical, plumbing and HVAC." |
| 4 | Spa bathroom, Moen digital shower | Bathrooms | | CvfeGhLR7bQ_1,2,3,0 | "Brought entire space up-to-date and brightened it up." |
| 5 | Master bath, large-format marble tile | Bathrooms | | Cg2XEyCuFEK_3,5,2,4 | Large format tiles, DITRA, Schluter |
| 6 | Hearing healthcare office | Commercial | South Jersey | CNYnO0ZgYxG_0,1, CNbQ9ekgh6O_0, CNI8N6zgvCm_0 | Custom countertops and water-wall feature for a local family-owned practice |
| 7 | Whole-home refresh | Whole-House | | B64l-Y6Bx7G_4,3,5,6,1,7 (before 0) | Drywall, paint, lighting, chair rail, shadow boxes, luxury flooring |
| 8 | Princeton bathroom with rock-wall shower | Bathrooms | Princeton | B61U-YABVgr_1,0,2,3 | Freestanding soaker tub; cascading rock wall onto the shower floor |
| 9 | Finished basement with wet bar | Basements | | Bu_vQ-KHQEZ_6,4,5,1,0,2 | Finished basement, Coretec floors |
| 10 | Finished basement with full bath | Basements | | CJ9yz6JgplW_0,6,7,9,4 | Finished basement |
| 11 | Graffiti-tile powder room | Bathrooms | | B7TT_NPBNNa_2,1,3 | "One of my favorite bathrooms! The tile work is on point!" (Widell + Boschetti) |
| 12 | Master bath, steam shower and pinwheel tile | Bathrooms | | Bw96eqWnrgw_0,1,2,3, BxxXI6Qhs5e_0 | Steamist control pad |
| 13 | Master bath before & after | Bathrooms | | ByZCWXegb0T_1,2,3 | Heated floors |
| 14 | Master bath with herringbone accent | Bathrooms | | CDyZsqKA9z1_3,4,5,6 | Schluter niche |
| 15 | Laundry room makeover | Kitchens & Laundry | | CD4QvbrAr8T_1,2,3,4 (before 0) | "Went from 🤨 to 😍" |
| 16 | Living room built-ins and fireplace | Custom Carpentry | | B1XkMSSgTWX_7,4,6,3,1 | New floors, fireplace surround, built-in shelving, double-wide window seat |
| 17 | Lucent-peg wine wall | Custom Carpentry | | B68q58XBeKO_1,0 | Widell + Boschetti design |
| 18 | Custom mudrooms and bench seats | Custom Carpentry | | BuCqnyNAk1j_0,3, BXlZiR5nPRi_0,2, BT2Dyh4AB2J_0, BWbMpD5nPAc_1 | |
| 19 | Curved staircase and hardwood | Flooring & Trim | | B0mP5T4BZfR_0,1,2 | Custom curved step nosing |
| 20 | Curved board-and-batten wall | Flooring & Trim | | BZhwOqmny-Z_1,6, BZhv8u4nz2E_0 | |
| 21 | PVC deck and porch | Decks & Outdoor | | BviKE3cHNF0_0,1,2 | 100% PVC, picture frame border |
| 22 | Whole-house renovation, Moorestown | Whole-House | Moorestown | C4_yttKOj8p_0, C4_02AgOfNZ_0 | Reel covers only (vaulted ceiling, white oak floors) |
| 23 | JCC men's spa hot-tub install | Commercial | | B7JyctvhclX_5,7,1 | "Nothing about this was easy but with perfect planning and great execution..." |
| 24 | Kitchens (early work) | Kitchens & Laundry | | Buq9fp2HiOg_0, BPbcbOLB9mS_0, 1mZMHFw__q_0 | Older/collage images, lower quality |
| 25 | Built-in bunk beds | Custom Carpentry | | B6x3NkUhjHw_0 | Widell + Boschetti |
| 26 | Shower details | Bathrooms | | BviJsdVnYhR_0, BoWuvmXheas_0 | Pebble waterfall; glass tile |

Strong hero candidates (landscape-friendly): BvZeZNNns___1 (office), B1KV7VxAS2C_7 (deck kitchen), CvfeGhLR7bQ_1 (shower), B64l-Y6Bx7G_4 (kitchen/dining), Bu_vQ-KHQEZ_6 (basement bar).

## Do-not-use
- Any photo of Seth's family, kids, partner, friends, sports, travel, pets, or his selfies (except possibly one owner portrait if the client approves; none is professional quality).
- The vehicle break-in post, COVID posts, product-showroom posts (Brizo), TikTok-watermarked frames where avoidable.

## Open questions for the client
1. Preferred business name on the site: "Pearlman Design" vs "S Pearlman Design LLC".
2. Email address for the contact form and the Facebook URL.
3. Street address: show it or not (listings disagree).
4. The original logo file.
5. Permission to name design partners and the commercial clients (hearing practice, JCC).
6. Real customer testimonials (HomeAdvisor review text) to quote with permission.
7. Owner bio/photo; team size; years in the trade.
8. Domain name.

## Client answers (2026-10-11, via Howie)
1. Name on site: **Pearlman Design** (legal: Pearlman Design, LLC).
2. Form destination email: **mipearlman@gmail.com**. Facebook: **https://www.facebook.com/PearlmanDesign** (1.8K followers; "100% recommend (14 reviews)"; category Kitchen & Bath Contractor; areas Burlington, Camden and Atlantic County NJ; FB also lists seth@pearlmandesign.com).
3. Address: use the most recent. The newest source is the NJ license record via BuildZoom (updated 2026-10-01): **30 Glenn Drive, Voorhees, NJ 08043**. (Older: BBB 5 Glen Dr / 1 Holly Oak Dr; HomeAdvisor 2124 Berwyn Ct.) Spelling "Glenn" is from that record and unverified.
4. Logo: keep the recreated wordmark; the client may supply the file later.
5. Naming partners and commercial clients: **approved**.
6. Quoting reviews: **approved**.
7. Domain: **https://pearlmandesign.com/**

### Facebook "About" (client's words)
"We specialize in quality work. We specialize in custom home renovations if you can dream it, we can build it. We will do anything from small bathroom renovation to building a new dream home."

### HomeAdvisor profile (S Pearlman Design, LLC): 4.9 from 9 reviews, 100% 5-star distribution except one 4.5
About: "With over 20 years of experience in the construction industry, we are the experts you need to take care of your home or business. We handle everything from kitchen remodeling to multiple room renovations. We will treat your home as we would treat our own."

Reviews (verbatim, reviewer first name + initial, date, service):
- Jessica G., Sep 2019, 5.0: "Seth and team renovated my powder room. The quality was fantastic, Seth was always very responsive and the project finished on time."
- Michael P., Aug 2019, 5.0 ($20,000 flooring job): "Seth was so attentive and his attention to details was off the charts. From the day he came out for the estimate to the final detail, Seth and his staff were awesome. The flooring was perfect and it wasn't an easy job as there were several curves and odd shapes where the flooring was going. He was meticulous. Also, it wasn't easy taking out the ceramic tile. His staff made sure that each day when they left, the house was cleaned so that it wasn't a big inconvenience to come home to construction. He is the best I have ever worked with and would highly recommend."
- Marcey L., Aug 2018, 5.0, Kitchen Design: "The workers were wonderful and my kids were sad to see them go."
- Harriett S., Aug 2018, 5.0, Kitchen Remodel: "S Pearlman Design does high quality work. I hired Seth because the handyman I used for decades retired. Seth does work with perfection. My old handyman would rave about how great Seth's work was. My old handyman gives Seth recommendations all the time. I highly recommend him as well."
- David S., Aug 2018, 5.0, Major Renovation Multiple Rooms: "Seth was incredibly thorough and had great attention to detail. He really gave us our dream home. He charged a fair rate, came in on budget, really transparent, and just a really nice guy. We couldn't be happier!"
- Lauren P., Aug 2018, 5.0: "They do excellent work, are very timely and was headache free. Seth and his workers are nice responsible people that clean up after themselves. Got the work done in time and were very responsive! The quality of the work is above and beyond anyone else."
- Emily B., Aug 2018, 4.5, Kitchen Design: "They are very professional. His team is friendly and clean up after themselves... Seth is very responsive with responding to messages and calls. He helped me with budgeting for the project. He sent me to different vendors and told them what the budget was... The materials were high quality and exactly what I wanted... He helped me stay on budget but made sure I got what I wanted as well."
- Jamie D., Aug 2018, 5.0: "S Pearlman Design was fabulous to work with. I found Seth to be honest, trustworthy, and dependable. They have a flexible approach. Seth listened to my ideas, and gave me his expertise that made the overall project exceed my expectations."
- Terry S., Aug 2018, 5.0, Basement Remodeling: "We used S Pearlman Design to completely renovate my home from top to bottom. In the course of three months our home was converted from a 1995 decor to a 21st century modern design. My home is beautiful now. Seth was wonderful to work with. He listened to us, and gave us expert consultation and design ideas. Quality craftsmanship, great customer service and punctuality are but a few of this company's traits."

Facebook recommendation:
- Laura F.: "We did a full house renovation with Seth including 2.5 baths, kitchen and great room. Everything turned out beautiful and we couldn't be happier. Great quality and the style we were looking for. Highly recommend!"
