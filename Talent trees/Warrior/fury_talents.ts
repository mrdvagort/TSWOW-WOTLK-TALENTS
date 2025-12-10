import { std } from "wow/wotlk"

// ============================================================================
// Fury Warrior Talent Tree - Original Tree
// TalentTab ID: 163
// ============================================================================

// Get the Warrior class
const WARRIOR_CLASS = std.Classes.load("WARRIOR")

// Get the original Fury talent tree (index 1)
const FURY_TALENT_TREE = WARRIOR_CLASS.TalentTrees.get()[1]

// Delete all existing talents from the Fury tree
const existingTalents = FURY_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})


// ============================================================================
// Fury Talents - All spells reference the original Blizzard spell IDs
// ============================================================================

// Row 0 (Tier 1)
// ============================================================================

// Armored to the Teeth - Row 0, Column 0
const ARMORED_TO_THE_TEETH = FURY_TALENT_TREE.Talents
    .addGet("default", "armored-to-the-teeth")
    .Position.set(0, 0)

ARMORED_TO_THE_TEETH.Spells.add([61216, 61221, 61222]) // 3 ranks

// Booming Voice - Row 0, Column 1
const BOOMING_VOICE = FURY_TALENT_TREE.Talents
    .addGet("default", "booming-voice")
    .Position.set(0, 1)

BOOMING_VOICE.Spells.add([12321, 12835]) // 2 ranks

// Cruelty - Row 0, Column 2
const CRUELTY = FURY_TALENT_TREE.Talents
    .addGet("default", "cruelty")
    .Position.set(0, 2)

CRUELTY.Spells.add([12320, 12852, 12853, 12855, 12856]) // 5 ranks



// Row 1 (Tier 2)
// ============================================================================

// Improved Demoralizing Shout - Row 0, Column 3
const IMPROVED_DEMORALIZING_SHOUT = FURY_TALENT_TREE.Talents
    .addGet("default", "improved-demoralizing-shout")
    .Position.set(1, 1)

IMPROVED_DEMORALIZING_SHOUT.Spells.add([12324, 12876, 12877, 12878, 12879]) // 5 ranks

// Unbridled Wrath - Row 1, Column 0
const UNBRIDLED_WRATH = FURY_TALENT_TREE.Talents
    .addGet("default", "unbridled-wrath")
    .Position.set(1, 2)

UNBRIDLED_WRATH.Spells.add([12322, 12999, 13000, 13001, 13002]) // 5 ranks



// Row 2 (Tier 3)
// ============================================================================

// Improved Cleave - Row 1, Column 1
const IMPROVED_CLEAVE = FURY_TALENT_TREE.Talents
    .addGet("default", "improved-cleave")
    .Position.set(2, 0)

IMPROVED_CLEAVE.Spells.add([12329, 12950, 20496]) // 3 ranks

// Piercing Howl - Row 1, Column 2
const PIERCING_HOWL = FURY_TALENT_TREE.Talents
    .addGet("default", "piercing-howl")
    .Position.set(2, 1)

PIERCING_HOWL.Spells.add([12323]) // 1 rank

// Blood Craze - Row 1, Column 3
const BLOOD_CRAZE = FURY_TALENT_TREE.Talents
    .addGet("default", "blood-craze")
    .Position.set(2, 2)

BLOOD_CRAZE.Spells.add([16487, 16489, 16492]) // 3 ranks

// Commanding Presence - Row 2, Column 0
const COMMANDING_PRESENCE = FURY_TALENT_TREE.Talents
    .addGet("default", "commanding-presence")
    .Position.set(2, 3)

COMMANDING_PRESENCE.Spells.add([12318, 12857, 12858, 12860, 12861]) // 5 ranks



// Row 3 (Tier 4)
// ============================================================================
// Dual Wield Specialization - Row 2, Column 1

const DUAL_WIELD_SPECIALIZATION = FURY_TALENT_TREE.Talents
    .addGet("default", "dual-wield-specialization")
    .Position.set(3, 1)

DUAL_WIELD_SPECIALIZATION.Spells.add([23584, 23585, 23586, 23587, 23588]) // 5 ranks

// Improved Execute - Row 2, Column 2
const IMPROVED_EXECUTE = FURY_TALENT_TREE.Talents
    .addGet("default", "improved-execute")
    .Position.set(3, 2)

IMPROVED_EXECUTE.Spells.add([20502, 20503]) // 2 ranks

// Enrage - Row 2, Column 3
const ENRAGE = FURY_TALENT_TREE.Talents
    .addGet("default", "enrage")
    .Position.set(3, 3)

ENRAGE.Spells.add([12317, 13045, 13046, 13047, 13048]) // 5 ranks



// Row 4 (Tier 5)
// ============================================================================

// Precision - Row 3, Column 0
const PRECISION = FURY_TALENT_TREE.Talents
    .addGet("default", "precision")
    .Position.set(4, 0)

PRECISION.Spells.add([29590, 29591, 29592]) // 3 ranks

// Death Wish - Row 3, Column 1
const DEATH_WISH = FURY_TALENT_TREE.Talents
    .addGet("default", "death-wish")
    .Position.set(4, 1)

DEATH_WISH.Spells.add([12292]) // 1 rank

// Improved Intercept - Row 3, Column 2
const IMPROVED_INTERCEPT = FURY_TALENT_TREE.Talents
    .addGet("default", "improved-intercept")
    .Position.set(4, 2)

IMPROVED_INTERCEPT.Spells.add([29888, 29889]) // 2 ranks



// Row 5 (Tier 6)
// ============================================================================

// Improved Berserker Rage - Row 3, Column 3
const IMPROVED_BERSERKER_RAGE = FURY_TALENT_TREE.Talents
    .addGet("default", "improved-berserker-rage")
    .Position.set(5, 0)

IMPROVED_BERSERKER_RAGE.Spells.add([20500, 20501]) // 2 ranks

// Improved Berserker Rage - Row 3, Column 3
const FLURRY = FURY_TALENT_TREE.Talents
    .addGet("default", "FLURRY-berserker-rage")
    .Position.set(5, 2)

FLURRY.Spells.add([12966, 12967, 12968, 12969, 12970]) // 5 ranks


// Row 6 (Tier 7)
// ============================================================================

// Intensify Rage - Row 4, Column 1
const INTENSIFY_RAGE = FURY_TALENT_TREE.Talents
    .addGet("default", "intensify-rage")
    .Position.set(6, 0)

INTENSIFY_RAGE.Spells.add([46908, 46909, 56924]) // 3 ranks

// Bloodthirst - Row 5, Column 1 (Signature Talent)
const BLOODTHIRST = FURY_TALENT_TREE.Talents
    .addGet("default", "bloodthirst")
    .Position.set(6, 1)
    .Requirements.add(DEATH_WISH.ID, 1)

BLOODTHIRST.Spells.add([23881]) // 1 rank

// Improved Whirlwind - Row 4, Column 3
const IMPROVED_WHIRLWIND = FURY_TALENT_TREE.Talents
    .addGet("default", "improved-whirlwind")
    .Position.set(6, 3)

IMPROVED_WHIRLWIND.Spells.add([29721, 29776]) // 2 ranks


// Row 7 (Tier 8)
// ============================================================================

// Furious Attacks - Row 5, Column 0
const FURIOUS_ATTACKS = FURY_TALENT_TREE.Talents
    .addGet("default", "furious-attacks")
    .Position.set(7, 0)

FURIOUS_ATTACKS.Spells.add([46910, 46911]) // 2 ranks

// Improved Berserker Stance - Row 5, Column 2
const IMPROVED_BERSERKER_STANCE = FURY_TALENT_TREE.Talents
    .addGet("default", "fury-improved-berserker-stance")
    .Position.set(7, 3)

IMPROVED_BERSERKER_STANCE.Spells.add([29759, 29760, 29761, 29762, 29763]) // 5 ranks


// Row 7 (Tier 8)
// ============================================================================

// Heroic Fury - Row 6, Column 0
const HEROIC_FURY = FURY_TALENT_TREE.Talents
    .addGet("default", "heroic-fury")
    .Position.set(8, 0)

HEROIC_FURY.Spells.add([60970]) // 1 rank

// Rampage - Row 6, Column 1
const RAMPAGE = FURY_TALENT_TREE.Talents
    .addGet("default", "rampage")
    .Position.set(8, 1)
    .Requirements.add(BLOODTHIRST.ID, 1)

RAMPAGE.Spells.add([29801]) // 1 ranks

// Bloodsurge - Row 6, Column 2
const BLOODSURGE = FURY_TALENT_TREE.Talents
    .addGet("default", "bloodsurge")
    .Position.set(8, 2)
    .Requirements.add(BLOODTHIRST.ID, 1)

BLOODSURGE.Spells.add([46913, 46914, 46915]) // 3 ranks

// Row 9 (Tier 10)
// ============================================================================

// Unending Fury - Row 6, Column 3
const UNENDING_FURY = FURY_TALENT_TREE.Talents
    .addGet("default", "unending-fury")
    .Position.set(9, 1)

UNENDING_FURY.Spells.add([56927, 56929, 56930, 56931, 56932]) // 5 ranks

// Row 10 (Tier 11)
// ============================================================================

// Titan's Grip - Row 8, Column 1
const TITANS_GRIP = FURY_TALENT_TREE.Talents
    .addGet("default", "titans-grip")
    .Position.set(10, 1)

TITANS_GRIP.Spells.add([46917]) // 1 rank