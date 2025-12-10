import { std } from "wow/wotlk"

// ============================================================================
// Holy Priest Talent Tree - Original Tree
// TalentTab ID: 202
// ============================================================================

// Get the Priest class
const PRIEST_CLASS = std.Classes.load("PRIEST")

// Get the Holy talent tree (index 1)
export const HOLY_TALENT_TREE = PRIEST_CLASS.TalentTrees.get()[1]

// Delete all existing talents from the Holy tree
const existingTalents = HOLY_TALENT_TREE.Talents.get()
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

// Healing Focus - Row 0, Column 0
export const HEALING_FOCUS = HOLY_TALENT_TREE.Talents
    .addGet("default", "healing-focus")
    .Position.set(0, 0)

HEALING_FOCUS.Spells.add([14913, 15012]) // 2 ranks

// Improved Renew - Row 0, Column 1
export const IMPROVED_RENEW = HOLY_TALENT_TREE.Talents
    .addGet("default", "improved-renew")
    .Position.set(0, 1)

IMPROVED_RENEW.Spells.add([14908, 15020, 17191]) // 3 ranks

// Holy Specialization - Row 0, Column 2
export const HOLY_SPECIALIZATION = HOLY_TALENT_TREE.Talents
    .addGet("default", "holy-specialization")
    .Position.set(0, 2)

HOLY_SPECIALIZATION.Spells.add([14889, 15008, 15009, 15010, 15011]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Spell Warding - Row 1, Column 1
export const SPELL_WARDING = HOLY_TALENT_TREE.Talents
    .addGet("default", "spell-warding")
    .Position.set(1, 1)

SPELL_WARDING.Spells.add([27900, 27901, 27902, 27903, 27904]) // 5 ranks

// Divine Fury - Row 1, Column 2
export const DIVINE_FURY = HOLY_TALENT_TREE.Talents
    .addGet("default", "divine-fury")
    .Position.set(1, 2)

DIVINE_FURY.Spells.add([18530, 18531, 18533, 18534, 18535]) // 5 ranks


// Row 2 (Tier 3)
// ============================================================================

// Desperate Prayer - Row 2, Column 0
export const DESPERATE_PRAYER = HOLY_TALENT_TREE.Talents
    .addGet("default", "desperate-prayer")
    .Position.set(2, 0)

DESPERATE_PRAYER.Spells.add([19236]) // 1 rank

// Blessed Recovery - Row 2, Column 1
export const BLESSED_RECOVERY = HOLY_TALENT_TREE.Talents
    .addGet("default", "blessed-recovery")
    .Position.set(2, 1)

BLESSED_RECOVERY.Spells.add([27811, 27815, 27816]) // 3 ranks

// Inspiration - Row 2, Column 3
export const INSPIRATION = HOLY_TALENT_TREE.Talents
    .addGet("default", "inspiration")
    .Position.set(2, 3)

INSPIRATION.Spells.add([14892, 15362, 15363]) // 3 ranks


// Row 3 (Tier 4)
// ============================================================================

// Holy Reach - Row 3, Column 0
export const HOLY_REACH = HOLY_TALENT_TREE.Talents
    .addGet("default", "holy-reach")
    .Position.set(3, 0)

HOLY_REACH.Spells.add([27789, 27790]) // 2 ranks

// Improved Healing - Row 3, Column 1
export const IMPROVED_HEALING = HOLY_TALENT_TREE.Talents
    .addGet("default", "improved-healing")
    .Position.set(3, 1)

IMPROVED_HEALING.Spells.add([14912, 15013, 15014]) // 3 ranks

// Searing Light - Row 3, Column 2
export const SEARING_LIGHT = HOLY_TALENT_TREE.Talents
    .addGet("default", "searing-light")
    .Position.set(3, 2)
    .Requirements.add(DIVINE_FURY.ID, 5)

SEARING_LIGHT.Spells.add([14909, 15017]) // 2 ranks


// Row 4 (Tier 5)
// ============================================================================

// Healing Prayers - Row 4, Column 0
export const HEALING_PRAYERS = HOLY_TALENT_TREE.Talents
    .addGet("default", "healing-prayers")
    .Position.set(4, 0)

HEALING_PRAYERS.Spells.add([14911, 15018]) // 2 ranks

// Spirit of Redemption - Row 4, Column 1
export const SPIRIT_OF_REDEMPTION = HOLY_TALENT_TREE.Talents
    .addGet("default", "spirit-of-redemption")
    .Position.set(4, 1)

SPIRIT_OF_REDEMPTION.Spells.add([20711]) // 1 rank

// Spiritual Guidance - Row 4, Column 2
export const SPIRITUAL_GUIDANCE = HOLY_TALENT_TREE.Talents
    .addGet("default", "spiritual-guidance")
    .Position.set(4, 2)

SPIRITUAL_GUIDANCE.Spells.add([14901, 15028, 15029, 15030, 15031]) // 5 ranks


// Row 5 (Tier 6)
// ============================================================================

// Surge of Light - Row 5, Column 0
export const SURGE_OF_LIGHT = HOLY_TALENT_TREE.Talents
    .addGet("default", "surge-of-light")
    .Position.set(5, 0)

SURGE_OF_LIGHT.Spells.add([33150, 33154]) // 2 ranks

// Spiritual Healing - Row 5, Column 2
export const SPIRITUAL_HEALING = HOLY_TALENT_TREE.Talents
    .addGet("default", "spiritual-healing")
    .Position.set(5, 2)

SPIRITUAL_HEALING.Spells.add([14898, 15349, 15354, 15355, 15356]) // 5 ranks


// Row 6 (Tier 7)
// ============================================================================

// Holy Concentration - Row 6, Column 0
export const HOLY_CONCENTRATION = HOLY_TALENT_TREE.Talents
    .addGet("default", "holy-concentration")
    .Position.set(6, 0)

HOLY_CONCENTRATION.Spells.add([34753, 34859, 34860]) // 3 ranks

// Lightwell - Row 6, Column 1
export const LIGHTWELL = HOLY_TALENT_TREE.Talents
    .addGet("default", "lightwell")
    .Position.set(6, 1)
    .Requirements.add(SPIRIT_OF_REDEMPTION.ID, 1)

LIGHTWELL.Spells.add([724]) // 1 rank

// Blessed Resilience - Row 6, Column 2
export const BLESSED_RESILIENCE = HOLY_TALENT_TREE.Talents
    .addGet("default", "blessed-resilience")
    .Position.set(6, 2)

BLESSED_RESILIENCE.Spells.add([33142, 33145, 33146]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Body and Soul - Row 7, Column 0
export const BODY_AND_SOUL = HOLY_TALENT_TREE.Talents
    .addGet("default", "body-and-soul")
    .Position.set(7, 0)

BODY_AND_SOUL.Spells.add([64127, 64129]) // 2 ranks

// Empowered Healing - Row 7, Column 1
export const EMPOWERED_HEALING = HOLY_TALENT_TREE.Talents
    .addGet("default", "empowered-healing")
    .Position.set(7, 1)

EMPOWERED_HEALING.Spells.add([33158, 33159, 33160, 33161, 33162]) // 5 ranks

// Serendipity - Row 7, Column 2
export const SERENDIPITY = HOLY_TALENT_TREE.Talents
    .addGet("default", "serendipity")
    .Position.set(7, 2)

SERENDIPITY.Spells.add([63730, 63733, 63737]) // 3 ranks


// Row 8 (Tier 9)
// ============================================================================

// Empowered Renew - Row 8, Column 0
export const EMPOWERED_RENEW = HOLY_TALENT_TREE.Talents
    .addGet("default", "empowered-renew")
    .Position.set(8, 0)

EMPOWERED_RENEW.Spells.add([63534, 63542, 63543]) // 3 ranks

// Circle of Healing - Row 8, Column 1
export const CIRCLE_OF_HEALING = HOLY_TALENT_TREE.Talents
    .addGet("default", "circle-of-healing")
    .Position.set(8, 1)

CIRCLE_OF_HEALING.Spells.add([34861]) // 1 rank

// Test of Faith - Row 8, Column 2
export const TEST_OF_FAITH = HOLY_TALENT_TREE.Talents
    .addGet("default", "test-of-faith")
    .Position.set(8, 2)

TEST_OF_FAITH.Spells.add([47558, 47559, 47560]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Divine Providence - Row 9, Column 1
export const DIVINE_PROVIDENCE = HOLY_TALENT_TREE.Talents
    .addGet("default", "divine-providence")
    .Position.set(9, 1)

DIVINE_PROVIDENCE.Spells.add([47562, 47564, 47565, 47566, 47567]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Guardian Spirit - Row 10, Column 1
export const GUARDIAN_SPIRIT = HOLY_TALENT_TREE.Talents
    .addGet("default", "guardian-spirit")
    .Position.set(10, 1)

GUARDIAN_SPIRIT.Spells.add([47788]) // 1 rank