import { std } from "wow/wotlk"

// ============================================================================
// Affliction Warlock Talent Tree - Original Tree
// TalentTab ID: 302
// ============================================================================

// Get the Warlock class
const WARLOCK_CLASS = std.Classes.load("WARLOCK")

// Get the Affliction talent tree (index 0)
export const AFFLICTION_TALENT_TREE = WARLOCK_CLASS.TalentTrees.get()[0]

// Delete all existing talents from the Affliction tree
const existingTalents = AFFLICTION_TALENT_TREE.Talents.get()
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

// Improved Curse of Agony - Row 0, Column 0
export const IMPROVED_CURSE_OF_AGONY = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "improved-curse-of-agony")
    .Position.set(0, 0)

IMPROVED_CURSE_OF_AGONY.Spells.add([18827, 18829]) // 2 ranks

// Suppression - Row 0, Column 1
export const SUPPRESSION = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "suppression")
    .Position.set(0, 1)

SUPPRESSION.Spells.add([18174, 18175, 18176]) // 3 ranks

// Improved Corruption - Row 0, Column 2
export const IMPROVED_CORRUPTION = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "improved-corruption")
    .Position.set(0, 2)

IMPROVED_CORRUPTION.Spells.add([17810, 17811, 17812, 17813, 17814]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Improved Curse of Weakness - Row 1, Column 0
export const IMPROVED_CURSE_OF_WEAKNESS = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "improved-curse-of-weakness")
    .Position.set(1, 0)

IMPROVED_CURSE_OF_WEAKNESS.Spells.add([18179, 18180]) // 2 ranks

// Improved Drain Soul - Row 1, Column 1
export const IMPROVED_DRAIN_SOUL = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "improved-drain-soul")
    .Position.set(1, 1)

IMPROVED_DRAIN_SOUL.Spells.add([18213, 18372]) // 2 ranks

// Improved Life Tap - Row 1, Column 2
export const IMPROVED_LIFE_TAP = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "improved-life-tap")
    .Position.set(1, 2)

IMPROVED_LIFE_TAP.Spells.add([18182, 18183]) // 2 ranks

// Soul Siphon - Row 1, Column 3
export const SOUL_SIPHON = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "soul-siphon")
    .Position.set(1, 3)

SOUL_SIPHON.Spells.add([17804, 17805]) // 2 ranks


// Row 2 (Tier 3)
// ============================================================================

// Improved Fear - Row 2, Column 0
export const IMPROVED_FEAR = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "improved-fear")
    .Position.set(2, 0)

IMPROVED_FEAR.Spells.add([53754, 53759]) // 2 ranks

// Fel Concentration - Row 2, Column 1
export const FEL_CONCENTRATION = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "fel-concentration")
    .Position.set(2, 1)

FEL_CONCENTRATION.Spells.add([17783, 17784, 17785]) // 3 ranks

// Amplify Curse - Row 2, Column 2
export const AMPLIFY_CURSE = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "amplify-curse")
    .Position.set(2, 2)

AMPLIFY_CURSE.Spells.add([18288]) // 1 rank


// Row 3 (Tier 4)
// ============================================================================

// Grim Reach - Row 3, Column 0
export const GRIM_REACH = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "grim-reach")
    .Position.set(3, 0)

GRIM_REACH.Spells.add([18218, 18219]) // 2 ranks

// Nightfall - Row 3, Column 1
export const NIGHTFALL = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "nightfall")
    .Position.set(3, 1)

NIGHTFALL.Spells.add([18094, 18095]) // 2 ranks

// Empowered Corruption - Row 3, Column 3
export const EMPOWERED_CORRUPTION = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "empowered-corruption")
    .Position.set(3, 3)

EMPOWERED_CORRUPTION.Spells.add([32381, 32382, 32383]) // 3 ranks


// Row 4 (Tier 5)
// ============================================================================

// Shadow Embrace - Row 4, Column 0
export const SHADOW_EMBRACE = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "shadow-embrace")
    .Position.set(4, 0)

SHADOW_EMBRACE.Spells.add([32385, 32387, 32392, 32393, 32394]) // 5 ranks

// Siphon Life - Row 4, Column 1
export const SIPHON_LIFE = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "siphon-life")
    .Position.set(4, 1)

SIPHON_LIFE.Spells.add([63108]) // 1 rank

// Curse of Exhaustion - Row 4, Column 2
export const CURSE_OF_EXHAUSTION = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "curse-of-exhaustion")
    .Position.set(4, 2)

CURSE_OF_EXHAUSTION.Spells.add([18223]) // 1 rank


// Row 5 (Tier 6)
// ============================================================================

// Improved Felhunter - Row 5, Column 0
export const IMPROVED_FELHUNTER = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "improved-felhunter")
    .Position.set(5, 0)

IMPROVED_FELHUNTER.Spells.add([54037, 54038]) // 2 ranks

// Shadow Mastery - Row 5, Column 1
export const SHADOW_MASTERY = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "shadow-mastery")
    .Position.set(5, 1)

SHADOW_MASTERY.Spells.add([18271, 18272, 18273, 18274, 18275]) // 5 ranks


// Row 6 (Tier 7)
// ============================================================================

// Eradication - Row 6, Column 0
export const ERADICATION = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "eradication")
    .Position.set(6, 0)

ERADICATION.Spells.add([47195, 47196, 47197]) // 3 ranks

// Contagion - Row 6, Column 1
export const CONTAGION = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "contagion")
    .Position.set(6, 1)

CONTAGION.Spells.add([30060, 30061, 30062, 30063, 30064]) // 5 ranks

// Dark Pact - Row 6, Column 2
export const DARK_PACT = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "dark-pact")
    .Position.set(6, 2)

DARK_PACT.Spells.add([18220]) // 1 rank


// Row 7 (Tier 8)
// ============================================================================

// Improved Howl of Terror - Row 7, Column 0
export const IMPROVED_HOWL_OF_TERROR = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "improved-howl-of-terror")
    .Position.set(7, 0)

IMPROVED_HOWL_OF_TERROR.Spells.add([30054, 30057]) // 2 ranks

// Malediction - Row 7, Column 2
export const MALEDICTION = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "malediction")
    .Position.set(7, 2)

MALEDICTION.Spells.add([32477, 32483, 32484]) // 3 ranks


// Row 8 (Tier 9)
// ============================================================================

// Death's Embrace - Row 8, Column 0
export const DEATH_S_EMBRACE = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "death-s-embrace")
    .Position.set(8, 0)

DEATH_S_EMBRACE.Spells.add([47198, 47199, 47200]) // 3 ranks

// Unstable Affliction - Row 8, Column 1
export const UNSTABLE_AFFLICTION = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "unstable-affliction")
    .Position.set(8, 1)

UNSTABLE_AFFLICTION.Spells.add([30108]) // 1 rank

// Pandemic - Row 8, Column 2
export const PANDEMIC = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "pandemic")
    .Position.set(8, 2)

PANDEMIC.Spells.add([58435]) // 1 rank


// Row 9 (Tier 10)
// ============================================================================

// Everlasting Affliction - Row 9, Column 1
export const EVERLASTING_AFFLICTION = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "everlasting-affliction")
    .Position.set(9, 1)

EVERLASTING_AFFLICTION.Spells.add([47201, 47202, 47203, 47204, 47205]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Haunt - Row 10, Column 1
export const HAUNT = AFFLICTION_TALENT_TREE.Talents
    .addGet("default", "haunt")
    .Position.set(10, 1)

HAUNT.Spells.add([48181]) // 1 rank