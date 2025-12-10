import { std } from "wow/wotlk"

// ============================================================================
// Destruction Warlock Talent Tree - Original Tree
// TalentTab ID: 301
// ============================================================================

// Get the Warlock class
const WARLOCK_CLASS = std.Classes.load("WARLOCK")

// Get the Destruction talent tree (index 2)
 const DESTRUCTION_TALENT_TREE = WARLOCK_CLASS.TalentTrees.get()[2]

// Delete all existing talents from the Destruction tree
const existingTalents = DESTRUCTION_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})


// ============================================================================
// PASTE PRINTER OUTPUT BELOW THIS LINE
// ============================================================================

// Improved Shadow Bolt - Row 0, Column 1
 const IMPROVED_SHADOW_BOLT = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "improved-shadow-bolt")
    .Position.set(0, 1)

IMPROVED_SHADOW_BOLT.Spells.add([17793, 17796, 17801, 17802, 17803]) // 5 ranks

// Bane - Row 0, Column 2
 const BANE = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "bane")
    .Position.set(0, 2)

BANE.Spells.add([17788, 17789, 17790, 17791, 17792]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Aftermath - Row 1, Column 0
 const AFTERMATH = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "aftermath")
    .Position.set(1, 0)

AFTERMATH.Spells.add([18119, 18120]) // 2 ranks

// Molten Skin - Row 1, Column 1
 const MOLTEN_SKIN = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "molten-skin")
    .Position.set(1, 1)

MOLTEN_SKIN.Spells.add([63349, 63350, 63351]) // 3 ranks

// Cataclysm - Row 1, Column 2
 const CATACLYSM = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "cataclysm")
    .Position.set(1, 2)

CATACLYSM.Spells.add([17778, 17779, 17780]) // 3 ranks


// Row 2 (Tier 3)
// ============================================================================

// Demonic Power - Row 2, Column 0
 const DEMONIC_POWER = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "demonic-power")
    .Position.set(2, 0)

DEMONIC_POWER.Spells.add([18126, 18127]) // 2 ranks

// Shadowburn - Row 2, Column 1
 const SHADOWBURN = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "shadowburn")
    .Position.set(2, 1)

SHADOWBURN.Spells.add([17877]) // 1 rank

// Ruin - Row 2, Column 2
 const RUIN = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "ruin")
    .Position.set(2, 2)

RUIN.Spells.add([17959, 59738, 59739, 59740, 59741]) // 5 ranks


// Row 3 (Tier 4)
// ============================================================================

// Intensity - Row 3, Column 0
 const WARLOOCK_INTENSITY = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "warlock-intensity")
    .Position.set(3, 0)

WARLOOCK_INTENSITY.Spells.add([18135, 18136]) // 2 ranks

// Destructive Reach - Row 3, Column 1
 const DESTRUCTIVE_REACH = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "destructive-reach")
    .Position.set(3, 1)

DESTRUCTIVE_REACH.Spells.add([17917, 17918]) // 2 ranks

// Improved Searing Pain - Row 3, Column 3
 const IMPROVED_SEARING_PAIN = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "improved-searing-pain")
    .Position.set(3, 3)

IMPROVED_SEARING_PAIN.Spells.add([17927, 17929, 17930]) // 3 ranks


// Row 4 (Tier 5)
// ============================================================================

// Backlash - Row 4, Column 0
 const BACKLASH = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "backlash")
    .Position.set(4, 0)

BACKLASH.Spells.add([34935, 34938, 34939]) // 3 ranks

// Improved Immolate - Row 4, Column 1
 const IMPROVED_IMMOLATE = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "improved-immolate")
    .Position.set(4, 1)

IMPROVED_IMMOLATE.Spells.add([17815, 17833, 17834]) // 3 ranks

// Devastation - Row 4, Column 2
 const DEVASTATION = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "devastation")
    .Position.set(4, 2)

DEVASTATION.Spells.add([18130]) // 1 rank


// Row 5 (Tier 6)
// ============================================================================

// Nether Protection - Row 5, Column 0
 const NETHER_PROTECTION = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "nether-protection")
    .Position.set(5, 0)

NETHER_PROTECTION.Spells.add([30299, 30301, 30302]) // 3 ranks

// Emberstorm - Row 5, Column 2
 const EMBERSTORM = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "emberstorm")
    .Position.set(5, 2)

EMBERSTORM.Spells.add([17954, 17955, 17956, 17957, 17958]) // 5 ranks


// Row 6 (Tier 7)
// ============================================================================

// Conflagrate - Row 6, Column 1
 const CONFLAGRATE = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "conflagrate")
    .Position.set(6, 1)

CONFLAGRATE.Spells.add([17962]) // 1 rank

// Soul Leech - Row 6, Column 2
 const SOUL_LEECH = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "soul-leech")
    .Position.set(6, 2)

SOUL_LEECH.Spells.add([30293, 30295, 30296]) // 3 ranks

// Pyroclasm - Row 6, Column 3
 const PYROCLASM = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "pyroclasm")
    .Position.set(6, 3)

PYROCLASM.Spells.add([18096, 18073, 63245]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Shadow and Flame - Row 7, Column 1
 const SHADOW_AND_FLAME = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "shadow-and-flame")
    .Position.set(7, 1)

SHADOW_AND_FLAME.Spells.add([30288, 30289, 30290, 30291, 30292]) // 5 ranks

// Improved Soul Leech - Row 7, Column 2
 const IMPROVED_SOUL_LEECH = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "improved-soul-leech")
    .Position.set(7, 2)

IMPROVED_SOUL_LEECH.Spells.add([54117, 54118]) // 2 ranks


// Row 8 (Tier 9)
// ============================================================================

// Backdraft - Row 8, Column 0
 const BACKDRAFT = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "backdraft")
    .Position.set(8, 0)

BACKDRAFT.Spells.add([47258, 47259, 47260]) // 3 ranks

// Shadowfury - Row 8, Column 1
 const SHADOWFURY = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "shadowfury")
    .Position.set(8, 1)

SHADOWFURY.Spells.add([30283]) // 1 rank

// Empowered Imp - Row 8, Column 2
 const EMPOWERED_IMP = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "empowered-imp")
    .Position.set(8, 2)

EMPOWERED_IMP.Spells.add([47220, 47221, 47223]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Fire and Brimstone - Row 9, Column 1
 const FIRE_AND_BRIMSTONE = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "fire-and-brimstone")
    .Position.set(9, 1)

FIRE_AND_BRIMSTONE.Spells.add([47266, 47267, 47268, 47269, 47270]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Chaos Bolt - Row 10, Column 1
 const CHAOS_BOLT = DESTRUCTION_TALENT_TREE.Talents
    .addGet("default", "chaos-bolt")
    .Position.set(10, 1)

CHAOS_BOLT.Spells.add([50796]) // 1 rank
