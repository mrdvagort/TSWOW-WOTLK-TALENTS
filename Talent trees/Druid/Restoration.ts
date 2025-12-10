import { std } from "wow/wotlk"

// ============================================================================
// Restoration Druid Talent Tree - Original Tree
// TalentTab ID: 282
// ============================================================================

// Get the Druid class
const DRUID_CLASS = std.Classes.load("DRUID")

// Get the Restoration talent tree (index 2)
export const RESTORATION_TALENT_TREE = DRUID_CLASS.TalentTrees.get()[2]

// Delete all existing talents from the Restoration tree
const existingTalents = RESTORATION_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})


// ============================================================================
// PASTE PRINTER OUTPUT BELOW THIS LINE
// ============================================================================

// Row 0 (Tier 1)
// ============================================================================

// Improved Mark of the Wild - Row 0, Column 0
export const IMPROVED_MARK_OF_THE_WILD = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "improved-mark-of-the-wild")
    .Position.set(0, 0)

IMPROVED_MARK_OF_THE_WILD.Spells.add([17050, 17051]) // 2 ranks

// Nature's Focus - Row 0, Column 1
export const NATURE_S_FOCUS = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "nature-s-focus")
    .Position.set(0, 1)

NATURE_S_FOCUS.Spells.add([17063, 17065, 17066]) // 3 ranks

// Furor - Row 0, Column 2
export const FUROR = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "furor")
    .Position.set(0, 2)

FUROR.Spells.add([17056, 17058, 17059, 17060, 17061]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Naturalist - Row 1, Column 0
export const NATURALIST = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "naturalist")
    .Position.set(1, 0)

NATURALIST.Spells.add([17069, 17070, 17071, 17072, 17073]) // 5 ranks

// Subtlety - Row 1, Column 1
export const SUBTLETY = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "subtlety")
    .Position.set(1, 1)

SUBTLETY.Spells.add([17118, 17119, 17120]) // 3 ranks

// Natural Shapeshifter - Row 1, Column 2
export const NATURAL_SHAPESHIFTER = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "natural-shapeshifter")
    .Position.set(1, 2)

NATURAL_SHAPESHIFTER.Spells.add([16833, 16834, 16835]) // 3 ranks


// Row 2 (Tier 3)
// ============================================================================

// Intensity - Row 2, Column 0
export const INTENSITY = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "intensity")
    .Position.set(2, 0)

INTENSITY.Spells.add([17106, 17107, 17108]) // 3 ranks

// Omen of Clarity - Row 2, Column 1
export const OMEN_OF_CLARITY = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "omen-of-clarity")
    .Position.set(2, 1)

OMEN_OF_CLARITY.Spells.add([16864]) // 1 rank

// Master Shapeshifter - Row 2, Column 2
export const MASTER_SHAPESHIFTER = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "master-shapeshifter")
    .Position.set(2, 2)

MASTER_SHAPESHIFTER.Spells.add([48411, 48412]) // 2 ranks


// Row 3 (Tier 4)
// ============================================================================

// Tranquil Spirit - Row 3, Column 1
export const TRANQUIL_SPIRIT = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "tranquil-spirit")
    .Position.set(3, 1)

TRANQUIL_SPIRIT.Spells.add([24968, 24969, 24970, 24971, 24972]) // 5 ranks

// Improved Rejuvenation - Row 3, Column 2
export const IMPROVED_REJUVENATION = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "improved-rejuvenation")
    .Position.set(3, 2)

IMPROVED_REJUVENATION.Spells.add([17111, 17112, 17113]) // 3 ranks


// Row 4 (Tier 5)
// ============================================================================

// Nature's Swiftness - Row 4, Column 0
export const NATURE_S_SWIFTNESS = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "nature-s-swiftness")
    .Position.set(4, 0)
    .Requirements.add(INTENSITY.ID, 3)

NATURE_S_SWIFTNESS.Spells.add([17116]) // 1 rank

// Gift of Nature - Row 4, Column 1
export const GIFT_OF_NATURE = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "gift-of-nature")
    .Position.set(4, 1)

GIFT_OF_NATURE.Spells.add([17104, 24943, 24944, 24945, 24946]) // 5 ranks

// Improved Tranquility - Row 4, Column 3
export const IMPROVED_TRANQUILITY = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "improved-tranquility")
    .Position.set(4, 3)

IMPROVED_TRANQUILITY.Spells.add([17123, 17124]) // 2 ranks


// Row 5 (Tier 6)
// ============================================================================

// Empowered Touch - Row 5, Column 0
export const EMPOWERED_TOUCH = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "empowered-touch")
    .Position.set(5, 0)

EMPOWERED_TOUCH.Spells.add([33879, 33880]) // 2 ranks

// Nature's Bounty - Row 5, Column 2
export const NATURE_S_BOUNTY = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "nature-s-bounty")
    .Position.set(5, 2)
    .Requirements.add(IMPROVED_REJUVENATION.ID, 3)

NATURE_S_BOUNTY.Spells.add([17074, 17075, 17076, 17077, 17078]) // 5 ranks


// Row 6 (Tier 7)
// ============================================================================

// Living Spirit - Row 6, Column 0
export const LIVING_SPIRIT = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "living-spirit")
    .Position.set(6, 0)

LIVING_SPIRIT.Spells.add([34151, 34152, 34153]) // 3 ranks

// Swiftmend - Row 6, Column 1
export const SWIFTMEND = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "swiftmend")
    .Position.set(6, 1)
    .Requirements.add(GIFT_OF_NATURE.ID, 5)

SWIFTMEND.Spells.add([18562]) // 1 rank

// Natural Perfection - Row 6, Column 2
export const NATURAL_PERFECTION = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "natural-perfection")
    .Position.set(6, 2)

NATURAL_PERFECTION.Spells.add([33881, 33882, 33883]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Empowered Rejuvenation - Row 7, Column 1
export const EMPOWERED_REJUVENATION = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "empowered-rejuvenation")
    .Position.set(7, 1)

EMPOWERED_REJUVENATION.Spells.add([33886, 33887, 33888, 33889, 33890]) // 5 ranks

// Living Seed - Row 7, Column 2
export const LIVING_SEED = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "living-seed")
    .Position.set(7, 2)

LIVING_SEED.Spells.add([48496, 48499, 48500]) // 3 ranks


// Row 8 (Tier 9)
// ============================================================================

// Revitalize - Row 8, Column 0
export const REVITALIZE = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "revitalize")
    .Position.set(8, 0)

REVITALIZE.Spells.add([48539, 48544, 48545]) // 3 ranks

// Tree of Life - Row 8, Column 1
export const TREE_OF_LIFE = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "tree-of-life")
    .Position.set(8, 1)
    .Requirements.add(EMPOWERED_REJUVENATION.ID, 5)

TREE_OF_LIFE.Spells.add([65139]) // 1 rank

// Improved Tree of Life - Row 8, Column 2
export const IMPROVED_TREE_OF_LIFE = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "improved-tree-of-life")
    .Position.set(8, 2)

IMPROVED_TREE_OF_LIFE.Spells.add([48535, 48536, 48537]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Improved Barkskin - Row 9, Column 0
export const IMPROVED_BARKSKIN = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "improved-barkskin")
    .Position.set(9, 0)

IMPROVED_BARKSKIN.Spells.add([63410, 63411]) // 2 ranks

// Gift of the Earthmother - Row 9, Column 2
export const GIFT_OF_THE_EARTHMOTHER = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "gift-of-the-earthmother")
    .Position.set(9, 2)

GIFT_OF_THE_EARTHMOTHER.Spells.add([51179, 51180, 51181, 51182, 51183]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Wild Growth - Row 10, Column 1
export const WILD_GROWTH = RESTORATION_TALENT_TREE.Talents
    .addGet("default", "wild-growth")
    .Position.set(10, 1)
    .Requirements.add(TREE_OF_LIFE.ID, 1)

WILD_GROWTH.Spells.add([48438]) // 1 rank
