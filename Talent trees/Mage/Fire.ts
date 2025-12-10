import { std } from "wow/wotlk"

// ============================================================================
// Fire Mage Talent Tree - Original Tree
// TalentTab ID: 41
// ============================================================================

// Get the Mage class
const MAGE_CLASS = std.Classes.load("MAGE")

// Get the Fire talent tree (index 1)
export const FIRE_TALENT_TREE = MAGE_CLASS.TalentTrees.get()[1]

// Delete all existing talents from the Fire tree
const existingTalents = FIRE_TALENT_TREE.Talents.get()
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

// Improved Fire Blast - Row 0, Column 0
export const IMPROVED_FIRE_BLAST = FIRE_TALENT_TREE.Talents
    .addGet("default", "improved-fire-blast")
    .Position.set(0, 0)

IMPROVED_FIRE_BLAST.Spells.add([11078, 11080]) // 2 ranks

// Incineration - Row 0, Column 1
export const INCINERATION = FIRE_TALENT_TREE.Talents
    .addGet("default", "incineration")
    .Position.set(0, 1)

INCINERATION.Spells.add([18459, 18460, 54734]) // 3 ranks

// Improved Fireball - Row 0, Column 2
export const IMPROVED_FIREBALL = FIRE_TALENT_TREE.Talents
    .addGet("default", "improved-fireball")
    .Position.set(0, 2)

IMPROVED_FIREBALL.Spells.add([11069, 12338, 12339, 12340, 12341]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Ignite - Row 1, Column 0
export const IGNITE = FIRE_TALENT_TREE.Talents
    .addGet("default", "ignite")
    .Position.set(1, 0)

IGNITE.Spells.add([11119, 11120, 12846, 12847, 12848]) // 5 ranks

// Burning Determination - Row 1, Column 1
export const BURNING_DETERMINATION = FIRE_TALENT_TREE.Talents
    .addGet("default", "burning-determination")
    .Position.set(1, 1)

BURNING_DETERMINATION.Spells.add([54747, 54749]) // 2 ranks

// World in Flames - Row 1, Column 2
export const WORLD_IN_FLAMES = FIRE_TALENT_TREE.Talents
    .addGet("default", "world-in-flames")
    .Position.set(1, 2)

WORLD_IN_FLAMES.Spells.add([11108, 12349, 12350]) // 3 ranks


// Row 2 (Tier 3)
// ============================================================================

// Flame Throwing - Row 2, Column 0
export const FLAME_THROWING = FIRE_TALENT_TREE.Talents
    .addGet("default", "flame-throwing")
    .Position.set(2, 0)

FLAME_THROWING.Spells.add([11100, 12353]) // 2 ranks

// Impact - Row 2, Column 1
export const IMPACT = FIRE_TALENT_TREE.Talents
    .addGet("default", "impact")
    .Position.set(2, 1)

IMPACT.Spells.add([11103, 12357, 12358]) // 3 ranks

// Pyroblast - Row 2, Column 2
export const PYROBLAST = FIRE_TALENT_TREE.Talents
    .addGet("default", "pyroblast")
    .Position.set(2, 2)

PYROBLAST.Spells.add([11366]) // 1 rank

// Burning Soul - Row 2, Column 3
export const BURNING_SOUL = FIRE_TALENT_TREE.Talents
    .addGet("default", "burning-soul")
    .Position.set(2, 3)

BURNING_SOUL.Spells.add([11083, 12351]) // 2 ranks


// Row 3 (Tier 4)
// ============================================================================

// Improved Scorch - Row 3, Column 0
export const IMPROVED_SCORCH = FIRE_TALENT_TREE.Talents
    .addGet("default", "improved-scorch")
    .Position.set(3, 0)

IMPROVED_SCORCH.Spells.add([11095, 12872, 12873]) // 3 ranks

// Molten Shields - Row 3, Column 1
export const MOLTEN_SHIELDS = FIRE_TALENT_TREE.Talents
    .addGet("default", "molten-shields")
    .Position.set(3, 1)

MOLTEN_SHIELDS.Spells.add([11094, 13043]) // 2 ranks

// Master of Elements - Row 3, Column 3
export const MASTER_OF_ELEMENTS = FIRE_TALENT_TREE.Talents
    .addGet("default", "master-of-elements")
    .Position.set(3, 3)

MASTER_OF_ELEMENTS.Spells.add([29074, 29075, 29076]) // 3 ranks


// Row 4 (Tier 5)
// ============================================================================

// Playing with Fire - Row 4, Column 0
export const PLAYING_WITH_FIRE = FIRE_TALENT_TREE.Talents
    .addGet("default", "playing-with-fire")
    .Position.set(4, 0)

PLAYING_WITH_FIRE.Spells.add([31638, 31639, 31640]) // 3 ranks

// Critical Mass - Row 4, Column 1
export const CRITICAL_MASS = FIRE_TALENT_TREE.Talents
    .addGet("default", "critical-mass")
    .Position.set(4, 1)

CRITICAL_MASS.Spells.add([11115, 11367, 11368]) // 3 ranks

// Blast Wave - Row 4, Column 2
export const BLAST_WAVE = FIRE_TALENT_TREE.Talents
    .addGet("default", "blast-wave")
    .Position.set(4, 2)
    .Requirements.add(PYROBLAST.ID, 1)

BLAST_WAVE.Spells.add([11113]) // 1 rank


// Row 5 (Tier 6)
// ============================================================================

// Blazing Speed - Row 5, Column 0
export const BLAZING_SPEED = FIRE_TALENT_TREE.Talents
    .addGet("default", "blazing-speed")
    .Position.set(5, 0)

BLAZING_SPEED.Spells.add([31641, 31642]) // 2 ranks

// Fire Power - Row 5, Column 2
export const FIRE_POWER = FIRE_TALENT_TREE.Talents
    .addGet("default", "fire-power")
    .Position.set(5, 2)

FIRE_POWER.Spells.add([11124, 12378, 12398, 12399, 12400]) // 5 ranks


// Row 6 (Tier 7)
// ============================================================================

// Pyromaniac - Row 6, Column 0
export const PYROMANIAC = FIRE_TALENT_TREE.Talents
    .addGet("default", "pyromaniac")
    .Position.set(6, 0)

PYROMANIAC.Spells.add([34293, 34295, 34296]) // 3 ranks

// Combustion - Row 6, Column 1
export const COMBUSTION = FIRE_TALENT_TREE.Talents
    .addGet("default", "combustion")
    .Position.set(6, 1)
    .Requirements.add(CRITICAL_MASS.ID, 3)

COMBUSTION.Spells.add([11129]) // 1 rank

// Molten Fury - Row 6, Column 2
export const MOLTEN_FURY = FIRE_TALENT_TREE.Talents
    .addGet("default", "molten-fury")
    .Position.set(6, 2)

MOLTEN_FURY.Spells.add([31679, 31680]) // 2 ranks


// Row 7 (Tier 8)
// ============================================================================

// Fiery Payback - Row 7, Column 0
export const FIERY_PAYBACK = FIRE_TALENT_TREE.Talents
    .addGet("default", "fiery-payback")
    .Position.set(7, 0)

FIERY_PAYBACK.Spells.add([64353, 64357]) // 2 ranks

// Empowered Fire - Row 7, Column 2
export const EMPOWERED_FIRE = FIRE_TALENT_TREE.Talents
    .addGet("default", "empowered-fire")
    .Position.set(7, 2)

EMPOWERED_FIRE.Spells.add([31656, 31657, 31658]) // 3 ranks


// Row 8 (Tier 9)
// ============================================================================

// Firestarter - Row 8, Column 0
export const FIRESTARTER = FIRE_TALENT_TREE.Talents
    .addGet("default", "firestarter")
    .Position.set(8, 0)

FIRESTARTER.Spells.add([44442, 44443]) // 2 ranks

// Dragon's Breath - Row 8, Column 1
export const DRAGON_S_BREATH = FIRE_TALENT_TREE.Talents
    .addGet("default", "dragon-s-breath")
    .Position.set(8, 1)
    .Requirements.add(COMBUSTION.ID, 1)

DRAGON_S_BREATH.Spells.add([31661]) // 1 rank

// Hot Streak - Row 8, Column 2
export const HOT_STREAK = FIRE_TALENT_TREE.Talents
    .addGet("default", "hot-streak")
    .Position.set(8, 2)

HOT_STREAK.Spells.add([44445, 44446, 44448]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Burnout - Row 9, Column 1
export const BURNOUT = FIRE_TALENT_TREE.Talents
    .addGet("default", "burnout")
    .Position.set(9, 1)

BURNOUT.Spells.add([44449, 44469, 44470, 44471, 44472]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Living Bomb - Row 10, Column 1
export const LIVING_BOMB = FIRE_TALENT_TREE.Talents
    .addGet("default", "living-bomb")
    .Position.set(10, 1)

LIVING_BOMB.Spells.add([44457]) // 1 rank