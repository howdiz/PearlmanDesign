/*
 * Pearlman Design - project data (single source of truth).
 *
 * Consumed by: assets/js/gallery.js (projects.html gallery + lightbox) and
 * tools/build_images.py (which reads each image's `src` from research/instagram/img/
 * and writes assets/img/<slug>-<n>-<width>.webp|jpg; n is the 1-based image position).
 *
 * build_images.py rewrites this file to record each image's `w`/`h` (output aspect
 * ratio at 1080px wide). Everything between the `=` and the final `;` must stay valid JSON.
 * `featured: true` marks the projects used in the home page strip (static HTML in index.html).
 * Images are shown in order; the first is the card cover.
 */
window.PEARLMAN_DATA = {
 "categories": [
  "Bathrooms",
  "Kitchens & Laundry",
  "Basements",
  "Whole-House",
  "Decks & Outdoor",
  "Custom Carpentry",
  "Flooring & Trim",
  "Commercial"
 ],
 "og": "deck-outdoor-kitchen",
 "projects": [
  {
   "slug": "deck-outdoor-kitchen",
   "title": "Custom deck with outdoor kitchen and hot tub",
   "category": "Decks & Outdoor",
   "summary": "A one-of-a-kind PVC deck with cable railing, an outdoor kitchen, LED lighting and a hot tub. It's all in the details.",
   "featured": true,
   "images": [
    {
     "src": "B1KV7VxAS2C_0",
     "alt": "Multi-level PVC deck with cable railing and wide stairs leading down to the yard, with the house behind",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B1KV7VxAS2C_1",
     "alt": "Outdoor kitchen counter with stainless steel appliance doors and gray painted cabinetry on a deck",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B1KV7VxAS2C_2",
     "alt": "Cable railing beside a gray paneled wall at the edge of the deck, with blooming hydrangeas",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B1KV7VxAS2C_3",
     "alt": "Close-up of deck stairs with a black-framed cable railing",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B1KV7VxAS2C_6",
     "alt": "Outdoor kitchen with a built-in grill cabinet and stainless doors, seen across the deck",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B1KW_QXgyF6_0",
     "alt": "Rear of a home with a new deck, wide steps and a paver patio",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B1KW_QXgyF6_4",
     "alt": "Deck stairs with black cable-rail posts above a paver patio",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B1KW_QXgyF6_1",
     "alt": "Stair post with cable railing and lattice skirting, close up",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "designer-office",
   "title": "Designer home office",
   "category": "Custom Carpentry",
   "summary": "Custom cabinetry, built-in shelving and a window seat, finished in a custom paint scheme. Design by Widell + Boschetti.",
   "featured": true,
   "images": [
    {
     "src": "BvZeZNNns___1",
     "alt": "Home office with white built-in cabinetry, a crystal chandelier and a deep blue ceiling",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "BvZeZNNns___2",
     "alt": "Built-in desk with a marble-look top, paneled cabinet doors and corner shelving",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "BvZeZNNns___3",
     "alt": "Paneled cabinet doors and open shelving above a built-in desk",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "BvZeZNNns___0",
     "alt": "Office window seat flanked by built-in shelves, with a desk on dark hardwood floors",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "two-unit-renovation",
   "title": "Two-unit gut renovation",
   "category": "Whole-House",
   "summary": "We rebuilt the foundation, then completely renovated both units with all-new electrical, plumbing and HVAC.",
   "featured": false,
   "images": [
    {
     "src": "CvhvBeTu_4d_5",
     "alt": "New kitchen with white cabinets, a stainless gas range and wood-look flooring",
     "w": 1080,
     "h": 814,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CvhvBeTu_4d_6",
     "alt": "Kitchen counter with a granite top, white cabinets and a subway tile backsplash",
     "w": 1080,
     "h": 814,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CvhvBeTu_4d_3",
     "alt": "Finished room under sloped ceilings with new wood-look flooring",
     "w": 1080,
     "h": 810,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CvhvBeTu_4d_9",
     "alt": "Living room with fresh gray paint and new wood-look floors",
     "w": 1080,
     "h": 810,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CvhvBeTu_4d_7",
     "alt": "Kitchen with a stainless steel refrigerator and a granite counter",
     "w": 1080,
     "h": 814,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CvhvBeTu_4d_4",
     "alt": "Finished upper-level room with new floors and dormer windows",
     "w": 1080,
     "h": 810,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "spa-bathroom",
   "title": "Spa bathroom with digital shower",
   "category": "Bathrooms",
   "summary": "A bathroom remodel that brought the whole space up to date and brightened it up. The highlight is a Moen digital shower, built on Schluter Systems waterproofing.",
   "featured": true,
   "images": [
    {
     "src": "CvfeGhLR7bQ_1",
     "alt": "Glass-enclosed walk-in shower with large-format tile and a recessed niche",
     "w": 1080,
     "h": 810,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CvfeGhLR7bQ_2",
     "alt": "Soaking tub beside a dark vanity and a bright window",
     "w": 1080,
     "h": 814,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CvfeGhLR7bQ_3",
     "alt": "Dark navy double vanity with a large mirror and two windows",
     "w": 1080,
     "h": 814,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "marble-tile-master-bath",
   "title": "Master bath with large-format tile",
   "category": "Bathrooms",
   "summary": "Large-format tile, a diamond-pattern mosaic and a Schluter DITRA base.",
   "featured": false,
   "images": [
    {
     "src": "Cg2XEyCuFEK_2",
     "alt": "Master bath with a glass-enclosed tiled shower beside a dark wood vanity",
     "w": 1080,
     "h": 1350,
     "widths": [480, 800, 1080]
    },
    {
     "src": "Cg2XEyCuFEK_3",
     "alt": "Shower with large veined tile, a diamond-pattern niche and a mosaic floor",
     "w": 1080,
     "h": 1350,
     "widths": [480, 800, 1080]
    },
    {
     "src": "Cg2XEyCuFEK_5",
     "alt": "Dark wood vanity cabinets with a light countertop and tile floor",
     "w": 1080,
     "h": 1350,
     "widths": [480, 800, 1080]
    },
    {
     "src": "Cg2XEyCuFEK_4",
     "alt": "Black-and-white diamond mosaic shower floor, close up",
     "w": 1080,
     "h": 1350,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "audiology-office",
   "title": "Associates in Hearing HealthCare",
   "category": "Commercial",
   "summary": "Custom countertops for a local, family-owned audiology practice. A great pleasure to work on.",
   "featured": false,
   "images": [
    {
     "src": "CNYnO0ZgYxG_1",
     "alt": "Curved reception counter with a black-and-white veined stone top in a medical office",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CNYnO0ZgYxG_0",
     "alt": "Reception counter with a black-and-white veined stone top below the Associates in Hearing HealthCare logo on the wall",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "whole-home-refresh",
   "title": "Whole-home refresh",
   "category": "Whole-House",
   "summary": "A massive amount of drywall work to make the walls new again, then fresh paint, new lighting, chair rail, shadow boxes and luxury flooring.",
   "featured": true,
   "images": [
    {
     "src": "B64l-Y6Bx7G_1",
     "alt": "Two-story foyer with a staircase and white paneled wainscoting",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B64l-Y6Bx7G_3",
     "alt": "Dining room with chair rail, shadow-box wainscoting and new wood-look flooring",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B64l-Y6Bx7G_6",
     "alt": "Bay window seating area with gray walls and white chair rail",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B64l-Y6Bx7G_5",
     "alt": "Living room with new flooring, fresh paint and large windows",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B64l-Y6Bx7G_7",
     "alt": "Entry door with sidelights framed by white wainscoting",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "princeton-bathroom",
   "title": "Princeton bathroom with rock-wall shower",
   "category": "Bathrooms",
   "location": "Princeton, NJ",
   "summary": "A freestanding soaker tub and a cascading rock wall that flows onto the shower floor.",
   "featured": true,
   "images": [
    {
     "src": "B61U-YABVgr_1",
     "alt": "Bathroom with a freestanding soaker tub, a white vanity and a glass-enclosed shower",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B61U-YABVgr_0",
     "alt": "Shower with light tile walls and a pebble stone cascade onto the shower floor",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B61U-YABVgr_2",
     "alt": "White double vanity with a tall linen cabinet and framed mirrors",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B61U-YABVgr_3",
     "alt": "White quartz vanity top with a framed mirror",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "basement-wet-bar",
   "title": "Finished basement with wet bar",
   "category": "Basements",
   "summary": "A finished basement with a wet bar, a bathroom and Coretec flooring throughout.",
   "featured": true,
   "images": [
    {
     "src": "Bu_vQ-KHQEZ_6",
     "alt": "Basement wet bar with dark cabinets, a mosaic backsplash and wood-look floors",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "Bu_vQ-KHQEZ_5",
     "alt": "Finished basement with a wall-mounted television, painted walls and new flooring",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "Bu_vQ-KHQEZ_4",
     "alt": "Open finished basement with gray walls and multi-tone plank flooring",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "Bu_vQ-KHQEZ_1",
     "alt": "Basement living area beside the wet bar",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "Bu_vQ-KHQEZ_0",
     "alt": "Basement staircase with a black railing and white spindles",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "Bu_vQ-KHQEZ_2",
     "alt": "Basement bathroom with a tub and gray tile surround",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "basement-full-bath",
   "title": "Finished basement with full bath",
   "category": "Basements",
   "summary": "A finished basement with new flooring, generous storage and a full bathroom.",
   "featured": false,
   "images": [
    {
     "src": "CJ9yz6JgplW_0",
     "alt": "Finished basement with a wall-mounted television and wood-look flooring",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CJ9yz6JgplW_6",
     "alt": "Finished basement room with a white door and new flooring",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CJ9yz6JgplW_9",
     "alt": "Basement bathroom with a glass shower enclosure",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CJ9yz6JgplW_7",
     "alt": "Hallway of white double doors in a finished basement",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "graffiti-tile-bathroom",
   "title": "Graffiti-tile bathroom",
   "category": "Bathrooms",
   "summary": "One of our favorite bathrooms. The tile work is on point. Design by Widell + Boschetti.",
   "featured": false,
   "images": [
    {
     "src": "B7TT_NPBNNa_2",
     "alt": "Bathroom with graffiti-pattern tile on the shower walls and a floating vanity",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B7TT_NPBNNa_1",
     "alt": "Walk-in shower covered in graffiti-print tile",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B7TT_NPBNNa_3",
     "alt": "Graffiti-print tile shower with a glass panel and a wall-hung vanity beyond",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "steam-shower-master-bath",
   "title": "Master bath with steam shower and pinwheel tile",
   "category": "Bathrooms",
   "summary": "A freestanding tub, geometric pinwheel floor tile, a floating double vanity and a Steamist control pad that runs the whole shower, even from your phone.",
   "featured": true,
   "images": [
    {
     "src": "Bw96eqWnrgw_0",
     "alt": "Freestanding white tub by a window above a black-and-white pinwheel tile floor",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "Bw96eqWnrgw_1",
     "alt": "Pinwheel tile floor leading to a freestanding tub",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "Bw96eqWnrgw_2",
     "alt": "Floating gray double vanity with a white top over pinwheel tile",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "Bw96eqWnrgw_3",
     "alt": "Double sinks with a white countertop and wall-mounted lights",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "BxxXI6Qhs5e_0",
     "alt": "Digital steam shower control pad mounted in stone tile",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "heated-floor-master-bath",
   "title": "Master bath with heated floors",
   "category": "Bathrooms",
   "summary": "Custom tile and heated floors in a master bath remodel.",
   "featured": false,
   "images": [
    {
     "src": "ByZCWXegb0T_1",
     "alt": "Glass walk-in shower with linear stripe tile and a pebble floor",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "ByZCWXegb0T_2",
     "alt": "Dark double vanity with a white quartz top and a large mirror",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "ByZCWXegb0T_3",
     "alt": "Vanity with brushed nickel faucets beside a half wall",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "herringbone-master-bath",
   "title": "Master bath with herringbone accent",
   "category": "Bathrooms",
   "summary": "Herringbone accent tile and a built-in shower niche, set on Schluter Systems waterproofing.",
   "featured": false,
   "images": [
    {
     "src": "CDyZsqKA9z1_4",
     "alt": "Glass shower with herringbone accent tile and a recessed niche",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CDyZsqKA9z1_5",
     "alt": "Dark wood vanity with a tall linen cabinet and two mirrors",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CDyZsqKA9z1_6",
     "alt": "Master bath looking toward the shower, with a dark cabinet and light floor",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CDyZsqKA9z1_3",
     "alt": "Shower wall with herringbone accent tile and a niche",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "laundry-room",
   "title": "Laundry room makeover",
   "category": "Kitchens & Laundry",
   "summary": "A laundry room with a built-in washer and dryer, a utility sink, new cabinets and tile floors. The difference is amazing.",
   "featured": false,
   "images": [
    {
     "src": "CD4QvbrAr8T_2",
     "alt": "Laundry room with front-loading washer and dryer beside a utility sink and white cabinets",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CD4QvbrAr8T_3",
     "alt": "Front-loading washer and dryer under a countertop with gray tile floors",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CD4QvbrAr8T_1",
     "alt": "Laundry room with white upper cabinets and a long countertop",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "CD4QvbrAr8T_4",
     "alt": "Laundry room with white cabinets, a countertop and a potted plant",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "living-room-built-ins",
   "title": "Living room built-ins and fireplace",
   "category": "Custom Carpentry",
   "summary": "New floors, a new fireplace surround, built-in shelving with doors and file drawers, and a double-wide window seat.",
   "featured": true,
   "images": [
    {
     "src": "B1XkMSSgTWX_4",
     "alt": "Double-wide window seat with built-in shelving beside the windows",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B1XkMSSgTWX_6",
     "alt": "White window seat with drawers beneath a bank of wood-framed windows",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B1XkMSSgTWX_7",
     "alt": "Living room with a white fireplace surround and new dark wood floors",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B1XkMSSgTWX_1",
     "alt": "Fireplace with a new white surround and stone hearth",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "wine-wall",
   "title": "Lucent-peg wine wall",
   "category": "Custom Carpentry",
   "summary": "Tedious work drilling the lucent pegs, and the results are amazing. Design by Widell + Boschetti.",
   "featured": false,
   "images": [
    {
     "src": "B68q58XBeKO_1",
     "alt": "Wine wall with bottles displayed on clear pegs against dark paneling",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B68q58XBeKO_0",
     "alt": "Hardwood floor with a chevron pattern, laid out with blue tape",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "mudrooms-bench-seats",
   "title": "Custom mudrooms and bench seats",
   "category": "Custom Carpentry",
   "summary": "Built-in cubbies, hooks and bench seats, including a stained cherry bench with pull-out doors and a built-in toe-kick vent.",
   "featured": false,
   "images": [
    {
     "src": "BuCqnyNAk1j_0",
     "alt": "Painted mudroom cubbies with a wood bench",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "BuCqnyNAk1j_3",
     "alt": "Mudroom with arched built-in shelving and coat hooks",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "BXlZiR5nPRi_2",
     "alt": "Arched built-in cubbies with board-and-batten backing",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "BT2Dyh4AB2J_0",
     "alt": "Built-in window bench seat with recessed pull-out doors",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "BWbMpD5nPAc_1",
     "alt": "New bench seat under plantation shutters, ready for paint",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "curved-stair-hardwood",
   "title": "Hardwood on a curved staircase",
   "category": "Flooring & Trim",
   "summary": "Think curved steps can't have hardwood? Think again. We custom-make curved step nosing so you can have the floors you wanted.",
   "featured": false,
   "images": [
    {
     "src": "B0mP5T4BZfR_0",
     "alt": "Curved staircase meeting dark hardwood floors with a custom curved step",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B0mP5T4BZfR_1",
     "alt": "Curved white step nosing wrapping around a dark hardwood floor",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B0mP5T4BZfR_2",
     "alt": "Detail of a custom step edge during installation",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "curved-board-and-batten",
   "title": "Curved board-and-batten wall",
   "category": "Flooring & Trim",
   "summary": "Custom trim and board-and-batten that follows a curved wall.",
   "featured": false,
   "images": [
    {
     "src": "BZhwOqmny-Z_1",
     "alt": "White board-and-batten paneling following the curve of a staircase wall",
     "w": 1080,
     "h": 1075,
     "widths": [480, 800, 1080]
    },
    {
     "src": "BZhwOqmny-Z_6",
     "alt": "White cabinet with glass doors over a beverage fridge, framed in custom trim",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "pvc-deck-porch",
   "title": "PVC deck and porch",
   "category": "Decks & Outdoor",
   "summary": "A 100% PVC deck and porch with a picture-frame border.",
   "featured": false,
   "images": [
    {
     "src": "BviKE3cHNF0_0",
     "alt": "PVC deck and porch with white railings leading to a red front door",
     "w": 1080,
     "h": 808,
     "widths": [480, 800, 1080]
    },
    {
     "src": "BviKE3cHNF0_1",
     "alt": "Front porch with white decorative railings and a red door",
     "w": 1080,
     "h": 808,
     "widths": [480, 800, 1080]
    },
    {
     "src": "BviKE3cHNF0_2",
     "alt": "Picture-frame border on a two-tone PVC deck, close up",
     "w": 1080,
     "h": 808,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "moorestown-renovation",
   "title": "Whole-house renovation, Moorestown",
   "category": "Whole-House",
   "location": "Moorestown, NJ",
   "summary": "A Moorestown renovation with a vaulted ceiling, white oak floors and Schluter heated flooring.",
   "featured": false,
   "images": [
    {
     "src": "C4_yttKOj8p_0",
     "alt": "Open living room with a vaulted ceiling and white oak floors",
     "w": 720,
     "h": 541,
     "widths": [480, 720]
    }
   ]
  },
  {
   "slug": "community-center-hot-tub",
   "title": "Hot-tub install at the JCC men's spa",
   "category": "Commercial",
   "summary": "We were trusted with a very critical move: bringing a new hot tub up to the men's spa at the JCC. Nothing about it was easy, but with perfect planning and great execution it went off without a hitch.",
   "featured": false,
   "images": [
    {
     "src": "B7JyctvhclX_7",
     "alt": "New hot tub wrapped for delivery being maneuvered into a building",
     "w": 1080,
     "h": 1079,
     "widths": [480, 800, 1080]
    },
    {
     "src": "B7JyctvhclX_1",
     "alt": "Wrapped hot tub secured on a trailer in a parking lot",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "kitchen-remodels",
   "title": "Kitchen remodels",
   "category": "Kitchens & Laundry",
   "summary": "Custom cabinetry, painted finishes, a farm sink and under-cabinet lighting from earlier kitchen projects.",
   "featured": false,
   "images": [
    {
     "src": "BPbcbOLB9mS_0",
     "alt": "Open kitchen with white cabinets, a dark island and pendant lighting",
     "w": 1080,
     "h": 607,
     "widths": [480, 800, 1080]
    },
    {
     "src": "1mZMHFw__q_0",
     "alt": "Kitchen with maple cabinets, a granite-topped island and a mosaic backsplash",
     "w": 640,
     "h": 640,
     "widths": [480, 640]
    },
    {
     "src": "Buq9fp2HiOg_0",
     "alt": "White kitchen with a custom island and dark floors",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "bunk-beds",
   "title": "Built-in bunk beds",
   "category": "Custom Carpentry",
   "summary": "Custom-built adult bunk beds under a bold painted ceiling. Design by Widell + Boschetti.",
   "featured": false,
   "images": [
    {
     "src": "B6x3NkUhjHw_0",
     "alt": "Built-in bunk beds with a center staircase under a branch-pattern ceiling",
     "w": 1080,
     "h": 1080,
     "widths": [480, 800, 1080]
    }
   ]
  },
  {
   "slug": "shower-details",
   "title": "Shower details",
   "category": "Bathrooms",
   "summary": "A pebble waterfall wall and an all-glass shower with glass tile.",
   "featured": false,
   "images": [
    {
     "src": "BviJsdVnYhR_0",
     "alt": "Shower with a pebble stone waterfall wall between stone tile panels",
     "w": 1068,
     "h": 1068,
     "widths": [480, 800, 1068]
    },
    {
     "src": "BoWuvmXheas_0",
     "alt": "All-glass shower with blue-green glass tile and a built-in niche",
     "w": 1080,
     "h": 1350,
     "widths": [480, 800, 1080]
    }
   ]
  }
 ]
};
