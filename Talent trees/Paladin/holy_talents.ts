import { std } from "wow/wotlk"

// ============================================================================
// Holy Paladin Talent Tree - Original Tree
// TalentTab ID: 381
// ============================================================================

// Get the Paladin class
const PALADIN_CLASS = std.Classes.load("PALADIN")

// Get the original Holy talent tree (index 0)
export const HOLY_TALENT_TREE = PALADIN_CLASS.TalentTrees.get()[0]

// Delete all existing talents from the Holy tree
const existingTalents = HOLY_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})


// ============================================================================
// Holy Talents - All spells reference the original Blizzard spell IDs
// ============================================================================

// Row 0 (Tier 1)
// ============================================================================

// Spiritual Focus - Row 0, Column 1
export const SPIRITUAL_FOCUS = HOLY_TALENT_TREE.Talents
    .addGet("default", "spiritual-focus")
    .Position.set(0, 1)

SPIRITUAL_FOCUS.Spells.add([20205, 20206, 20207, 20208, 20209]) // 3 ranks

// Seals of the Pure - Row 0, Column 2
export const SEALS_OF_THE_PURE = HOLY_TALENT_TREE.Talents
    .addGet("default", "seals-of-the-pure")
    .Position.set(0, 2)

SEALS_OF_THE_PURE.Spells.add([20224, 20225, 20330, 20331, 20332]) // 5 ranks

// Row 1 (Tier 2)
// ============================================================================

// Healing Light - Row 1, Column 0
export const HEALING_LIGHT = HOLY_TALENT_TREE.Talents
    .addGet("default", "healing-light")
    .Position.set(1, 0)

HEALING_LIGHT.Spells.add([20237, 20238, 20239]) // 3 ranks

// Divine Intellect - Row 1, Column 1
export const DIVINE_INTELLECT = HOLY_TALENT_TREE.Talents
    .addGet("default", "divine-intellect")
    .Position.set(1, 1)

DIVINE_INTELLECT.Spells.add([20257, 20258, 20259, 20260, 20261]) // 5 ranks

// Unyielding Faith - Row 1, Column 2
export const UNYIELDING_FAITH = HOLY_TALENT_TREE.Talents
    .addGet("default", "unyielding-faith")
    .Position.set(1, 2)

UNYIELDING_FAITH.Spells.add([20138, 20139]) // 2 ranks

// Row 2 (Tier 3)
// ============================================================================

// Aura Mastery - Row 2, Column 0
export const AURA_MASTERY = HOLY_TALENT_TREE.Talents
    .addGet("default", "aura-mastery")
    .Position.set(2, 0)

AURA_MASTERY.Spells.add([31821]) // 1 rank

// Illumination - Row 2, Column 1
export const ILLUMINATION = HOLY_TALENT_TREE.Talents
    .addGet("default", "illumination")
    .Position.set(2, 1)

ILLUMINATION.Spells.add([20210, 20212, 20213, 20214, 20215]) // 5 ranks

// Improved Lay on Hands - Row 2, Column 2
export const IMPROVED_LAY_ON_HANDS = HOLY_TALENT_TREE.Talents
    .addGet("default", "improved-lay-on-hands")
    .Position.set(2, 2)

IMPROVED_LAY_ON_HANDS.Spells.add([20234, 20235]) // 2 ranks

// Row 3 (Tier 4)
// ============================================================================

// Improved Concentration Aura - Row 3, Column 0
export const IMPROVED_CONCENTRATION_AURA = HOLY_TALENT_TREE.Talents
    .addGet("default", "improved-concentration-aura")
    .Position.set(3, 0)

IMPROVED_CONCENTRATION_AURA.Spells.add([20254, 20255, 20256]) // 3 ranks

// Improved Blessing of Wisdom - Row 3, Column 1
export const IMPROVED_BLESSING_OF_WISDOM = HOLY_TALENT_TREE.Talents
    .addGet("default", "improved-blessing-of-wisdom")
    .Position.set(3, 2)

IMPROVED_BLESSING_OF_WISDOM.Spells.add([20244,20245]) // 2 ranks

// Blessed Hands - Row 3, Column 2
export const BLESSED_HANDS = HOLY_TALENT_TREE.Talents
    .addGet("default", "blessed-hands")
    .Position.set(3, 3)

BLESSED_HANDS.Spells.add([53660, 53661]) // 2 ranks

// Row 4 (Tier 5)
// ============================================================================

// Pure of Heart - Row 4, Column 0
export const PURE_OF_HEART = HOLY_TALENT_TREE.Talents
    .addGet("default", "pure-of-heart")
    .Position.set(4, 0)

PURE_OF_HEART.Spells.add([31822,31823]) // 2 ranks

// Divine Favor - Row 4, Column 1
export const DIVINE_FAVOR = HOLY_TALENT_TREE.Talents
    .addGet("default", "divine-favor")
    .Position.set(4, 1)
    .Requirements.add(ILLUMINATION.ID, 5)

DIVINE_FAVOR.Spells.add([20216]) // 1 rank

// Sanctified Light - Row 4, Column 2
export const SANCTIFIED_LIGHT = HOLY_TALENT_TREE.Talents
    .addGet("default", "sanctified-light")
    .Position.set(4, 2)

SANCTIFIED_LIGHT.Spells.add([20359, 20360, 20361]) // 3 ranks

// Row 5 (Tier 6)
// ============================================================================

// Purifying Power - Row 5, Column 0
export const PURIFYING_POWER = HOLY_TALENT_TREE.Talents
    .addGet("default", "purifying-power")
    .Position.set(5, 0)

PURIFYING_POWER.Spells.add([31825, 31826]) // 2 ranks

// Holy Power - Row 5, Column 2
export const HOLY_POWER = HOLY_TALENT_TREE.Talents
    .addGet("default", "holy-power")
    .Position.set(5, 2)

HOLY_POWER.Spells.add([5923, 5924, 5925, 5926, 25829]) // 5 ranks

// Row 6 (Tier 7)
// ============================================================================

// Light's Grace - Row 6, Column 0
export const LIGHTS_GRACE = HOLY_TALENT_TREE.Talents
    .addGet("default", "lights-grace")
    .Position.set(6, 0)

LIGHTS_GRACE.Spells.add([31833, 31834, 31835]) // 3 ranks

// Holy Shock - Row 6, Column 1
export const HOLY_SHOCK = HOLY_TALENT_TREE.Talents
    .addGet("default", "holy-shock")
    .Position.set(6, 1)
    .Requirements.add(DIVINE_FAVOR.ID, 1)

HOLY_SHOCK.Spells.add([20473]) // 1 rank

// Blessed Life - Row 6, Column 2
export const BLESSED_LIFE = HOLY_TALENT_TREE.Talents
    .addGet("default", "blessed-life")
    .Position.set(6, 2)

BLESSED_LIFE.Spells.add([31828, 31829, 31830]) // 3 ranks

// Row 7 (Tier 8)
// ============================================================================

// Sacred Cleansing - Row 7, Column 0
export const SACRED_CLEANSING = HOLY_TALENT_TREE.Talents
    .addGet("default", "sacred-cleansing")
    .Position.set(7, 0)

SACRED_CLEANSING.Spells.add([53551, 53552, 53553]) // 3 ranks

// Holy Guidance - Row 7, Column 2
export const HOLY_GUIDANCE = HOLY_TALENT_TREE.Talents
    .addGet("default", "holy-guidance")
    .Position.set(7, 2)

HOLY_GUIDANCE.Spells.add([31821, 31823, 31824, 31825, 31826]) // 5 ranks

// Row 8 (Tier 9)
// ============================================================================

// Divine Illumination - Row 8, Column 0
export const DIVINE_ILLUMINATION = HOLY_TALENT_TREE.Talents
    .addGet("default", "divine-illumination")
    .Position.set(8, 0)

DIVINE_ILLUMINATION.Spells.add([31842]) // 1 rank

// Judgements of the Pure - Row 8, Column 2
export const JUDGEMENTS_OF_THE_PURE = HOLY_TALENT_TREE.Talents
    .addGet("default", "judgements-of-the-pure")
    .Position.set(8, 2)

JUDGEMENTS_OF_THE_PURE.Spells.add([53655, 53656, 53657, 54152, 54153]) // 3 ranks

// Row 9 (Tier 10)
// ============================================================================

// Infusion of Light - Row 9, Column 0
export const INFUSION_OF_LIGHT = HOLY_TALENT_TREE.Talents
    .addGet("default", "infusion-of-light")
    .Position.set(9, 1)
    .Requirements.add(HOLY_SHOCK.ID, 1)

INFUSION_OF_LIGHT.Spells.add([53569, 53576]) // 2 ranks

// Enlightened Judgements - Row 9, Column 2
export const ENLIGHTENED_JUDGEMENTS = HOLY_TALENT_TREE.Talents
    .addGet("default", "enlightened-judgements")
    .Position.set(9, 2)

ENLIGHTENED_JUDGEMENTS.Spells.add([53556, 53557]) // 2 ranks

// Row 10 (Tier 11)
// ============================================================================

// Beacon of Light - Row 10, Column 1
export const BEACON_OF_LIGHT = HOLY_TALENT_TREE.Talents
    .addGet("default", "beacon-of-light")
    .Position.set(10, 1)

BEACON_OF_LIGHT.Spells.add([53563]) // 1 rank


// improved blessing of wisdom
// Divine intellect