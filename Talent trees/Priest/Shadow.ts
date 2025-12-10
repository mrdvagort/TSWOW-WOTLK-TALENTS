import { std } from "wow/wotlk"

// ============================================================================
// Shadow Priest Talent Tree - Original Tree
// TalentTab ID: 203
// ============================================================================

// Get the Priest class
const PRIEST_CLASS = std.Classes.load("PRIEST")

// Get the Shadow talent tree (index 2)
export const SHADOW_TALENT_TREE = PRIEST_CLASS.TalentTrees.get()[2]

// Delete all existing talents from the Shadow tree
const existingTalents = SHADOW_TALENT_TREE.Talents.get()
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

// Spirit Tap - Row 0, Column 0
export const SPIRIT_TAP = SHADOW_TALENT_TREE.Talents
    .addGet("default", "spirit-tap")
    .Position.set(0, 0)

SPIRIT_TAP.Spells.add([15270, 15335, 15336]) // 3 ranks

// Improved Spirit Tap - Row 0, Column 1
export const IMPROVED_SPIRIT_TAP = SHADOW_TALENT_TREE.Talents
    .addGet("default", "improved-spirit-tap")
    .Position.set(0, 1)
    .Requirements.add(SPIRIT_TAP.ID, 3)

IMPROVED_SPIRIT_TAP.Spells.add([15337, 15338]) // 2 ranks

// Darkness - Row 0, Column 2
export const DARKNESS = SHADOW_TALENT_TREE.Talents
    .addGet("default", "darkness")
    .Position.set(0, 2)

DARKNESS.Spells.add([15259, 15307, 15308, 15309, 15310]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Shadow Affinity - Row 1, Column 0
export const SHADOW_AFFINITY = SHADOW_TALENT_TREE.Talents
    .addGet("default", "shadow-affinity")
    .Position.set(1, 0)

SHADOW_AFFINITY.Spells.add([15318, 15272, 15320]) // 3 ranks

// Improved Shadow Word: Pain - Row 1, Column 1
export const IMPROVED_SHADOW_WORD_PAIN = SHADOW_TALENT_TREE.Talents
    .addGet("default", "improved-shadow-word-pain")
    .Position.set(1, 1)

IMPROVED_SHADOW_WORD_PAIN.Spells.add([15275, 15317]) // 2 ranks

// Shadow Focus - Row 1, Column 2
export const SHADOW_FOCUS = SHADOW_TALENT_TREE.Talents
    .addGet("default", "shadow-focus")
    .Position.set(1, 2)

SHADOW_FOCUS.Spells.add([15260, 15327, 15328]) // 3 ranks


// Row 2 (Tier 3)
// ============================================================================

// Improved Psychic Scream - Row 2, Column 0
export const IMPROVED_PSYCHIC_SCREAM = SHADOW_TALENT_TREE.Talents
    .addGet("default", "improved-psychic-scream")
    .Position.set(2, 0)

IMPROVED_PSYCHIC_SCREAM.Spells.add([15392, 15448]) // 2 ranks

// Improved Mind Blast - Row 2, Column 1
export const IMPROVED_MIND_BLAST = SHADOW_TALENT_TREE.Talents
    .addGet("default", "improved-mind-blast")
    .Position.set(2, 1)

IMPROVED_MIND_BLAST.Spells.add([15273, 15312, 15313, 15314, 15316]) // 5 ranks

// Mind Flay - Row 2, Column 2
export const MIND_FLAY = SHADOW_TALENT_TREE.Talents
    .addGet("default", "mind-flay")
    .Position.set(2, 2)

MIND_FLAY.Spells.add([15407]) // 1 rank


// Row 3 (Tier 4)
// ============================================================================

// Veiled Shadows - Row 3, Column 1
export const VEILED_SHADOWS = SHADOW_TALENT_TREE.Talents
    .addGet("default", "veiled-shadows")
    .Position.set(3, 1)

VEILED_SHADOWS.Spells.add([15274, 15311]) // 2 ranks

// Shadow Reach - Row 3, Column 2
export const SHADOW_REACH = SHADOW_TALENT_TREE.Talents
    .addGet("default", "shadow-reach")
    .Position.set(3, 2)

SHADOW_REACH.Spells.add([17322, 17323]) // 2 ranks

// Shadow Weaving - Row 3, Column 3
export const SHADOW_WEAVING = SHADOW_TALENT_TREE.Talents
    .addGet("default", "shadow-weaving")
    .Position.set(3, 3)

SHADOW_WEAVING.Spells.add([15257, 15331, 15332]) // 3 ranks


// Row 4 (Tier 5)
// ============================================================================

// Silence - Row 4, Column 0
export const SILENCE = SHADOW_TALENT_TREE.Talents
    .addGet("default", "silence")
    .Position.set(4, 0)
    .Requirements.add(IMPROVED_PSYCHIC_SCREAM.ID, 2)

SILENCE.Spells.add([15487]) // 1 rank

// Vampiric Embrace - Row 4, Column 1
export const VAMPIRIC_EMBRACE = SHADOW_TALENT_TREE.Talents
    .addGet("default", "vampiric-embrace")
    .Position.set(4, 1)

VAMPIRIC_EMBRACE.Spells.add([15286]) // 1 rank

// Improved Vampiric Embrace - Row 4, Column 2
export const IMPROVED_VAMPIRIC_EMBRACE = SHADOW_TALENT_TREE.Talents
    .addGet("default", "improved-vampiric-embrace")
    .Position.set(4, 2)
    .Requirements.add(VAMPIRIC_EMBRACE.ID, 1)

IMPROVED_VAMPIRIC_EMBRACE.Spells.add([27839, 27840]) // 2 ranks

// Focused Mind - Row 4, Column 3
export const PRIEST_FOCUSED_MIND = SHADOW_TALENT_TREE.Talents
    .addGet("default", "PRIEST_focused-mind")
    .Position.set(4, 3)

PRIEST_FOCUSED_MIND.Spells.add([33213, 33214, 33215]) // 3 ranks


// Row 5 (Tier 6)
// ============================================================================

// Mind Melt - Row 5, Column 0
export const MIND_MELT = SHADOW_TALENT_TREE.Talents
    .addGet("default", "mind-melt")
    .Position.set(5, 0)

MIND_MELT.Spells.add([14910, 33371]) // 2 ranks

// Improved Devouring Plague - Row 5, Column 2
export const IMPROVED_DEVOURING_PLAGUE = SHADOW_TALENT_TREE.Talents
    .addGet("default", "improved-devouring-plague")
    .Position.set(5, 2)

IMPROVED_DEVOURING_PLAGUE.Spells.add([63625, 63626, 63627]) // 3 ranks


// Row 6 (Tier 7)
// ============================================================================

// Shadowform - Row 6, Column 1
export const SHADOWFORM = SHADOW_TALENT_TREE.Talents
    .addGet("default", "shadowform")
    .Position.set(6, 1)
    .Requirements.add(VAMPIRIC_EMBRACE.ID, 1)

SHADOWFORM.Spells.add([15473]) // 1 rank

// Shadow Power - Row 6, Column 2
export const SHADOW_POWER = SHADOW_TALENT_TREE.Talents
    .addGet("default", "shadow-power")
    .Position.set(6, 2)

SHADOW_POWER.Spells.add([33221, 33222, 33223, 33224, 33225]) // 5 ranks


// Row 7 (Tier 8)
// ============================================================================

// Improved Shadowform - Row 7, Column 0
export const IMPROVED_SHADOWFORM = SHADOW_TALENT_TREE.Talents
    .addGet("default", "improved-shadowform")
    .Position.set(7, 0)
    .Requirements.add(SHADOWFORM.ID, 1)

IMPROVED_SHADOWFORM.Spells.add([47569, 47570]) // 2 ranks

// Misery - Row 7, Column 2
export const MISERY = SHADOW_TALENT_TREE.Talents
    .addGet("default", "misery")
    .Position.set(7, 2)

MISERY.Spells.add([33191, 33192, 33193]) // 3 ranks


// Row 8 (Tier 9)
// ============================================================================

// Psychic Horror - Row 8, Column 0
export const PSYCHIC_HORROR = SHADOW_TALENT_TREE.Talents
    .addGet("default", "psychic-horror")
    .Position.set(8, 0)

PSYCHIC_HORROR.Spells.add([64044]) // 1 rank

// Vampiric Touch - Row 8, Column 1
export const VAMPIRIC_TOUCH = SHADOW_TALENT_TREE.Talents
    .addGet("default", "vampiric-touch")
    .Position.set(8, 1)
    .Requirements.add(SHADOWFORM.ID, 1)

VAMPIRIC_TOUCH.Spells.add([34914]) // 1 rank

// Pain and Suffering - Row 8, Column 2
export const PAIN_AND_SUFFERING = SHADOW_TALENT_TREE.Talents
    .addGet("default", "pain-and-suffering")
    .Position.set(8, 2)

PAIN_AND_SUFFERING.Spells.add([47580, 47581, 47582]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Twisted Faith - Row 9, Column 2
export const TWISTED_FAITH = SHADOW_TALENT_TREE.Talents
    .addGet("default", "twisted-faith")
    .Position.set(9, 2)

TWISTED_FAITH.Spells.add([47573, 47577, 47578, 51166, 51167]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Dispersion - Row 10, Column 1
export const DISPERSION = SHADOW_TALENT_TREE.Talents
    .addGet("default", "dispersion")
    .Position.set(10, 1)
    .Requirements.add(VAMPIRIC_TOUCH.ID, 1)

DISPERSION.Spells.add([47585]) // 1 rank
