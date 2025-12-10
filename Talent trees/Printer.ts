import { std } from "wow/wotlk"

// ============================================================================
// TALENT TREE PRINTER - Utility for extracting talent information
// ============================================================================

// SET THIS TO THE TALENT TAB ID YOU WANT TO PRINT
// Examples:
// - Warrior Arms: 161
// - Warrior Fury: 163
// - Warrior Protection: 164
// - Paladin Holy: 381
// - Paladin Protection: 382
// - Paladin Retribution: 383
// - Shaman Elemental: 261
// - Shaman Enhancement: 263
// - Shaman Restoration: 262
// ... (check TalentTab.dbc for other IDs)

const TAB_ID_TO_PRINT = 303

// ============================================================================
// Talent Tab ID to Spec Name Mapping
// ============================================================================

const TAB_ID_TO_SPEC_NAME: { [key: number]: string } = {
    // Warrior
    161: "ARMS",
    163: "FURY",
    164: "PROTECTION",
    // Paladin
    381: "HOLY",
    382: "PROTECTION",
    383: "RETRIBUTION",
    // Hunter
    361: "BEAST_MASTERY",
    363: "MARKSMANSHIP",
    362: "SURVIVAL",
    // Rogue
    181: "ASSASSINATION",
    182: "COMBAT",
    183: "SUBTLETY",
    // Priest
    201: "DISCIPLINE",
    202: "HOLY",
    203: "SHADOW",
    // Shaman
    261: "ELEMENTAL",
    263: "ENHANCEMENT",
    262: "RESTORATION",
    // Mage
    81: "ARCANE",
    41: "FIRE",
    61: "FROST",
    // Warlock
    302: "AFFLICTION",
    303: "DEMONOLOGY",
    301: "DESTRUCTION",
    // Druid
    283: "BALANCE",
    281: "FERAL_COMBAT",
    282: "RESTORATION",
}

// ============================================================================
// Printer Script
// ============================================================================

const specName = TAB_ID_TO_SPEC_NAME[TAB_ID_TO_PRINT] || "UNKNOWN_SPEC"
const treeVarName = `${specName}_TALENT_TREE`

console.log(`\n========================================`)
console.log(`TALENT TREE PRINTER - Tab ID: ${TAB_ID_TO_PRINT}`)
console.log(`Spec: ${specName}`)
console.log(`Tree Variable: ${treeVarName}`)
console.log(`========================================\n`)

interface TalentData {
    row: number
    col: number
    spellRanks: number[]
    talentID: number
    talentName: string
}

// Group talents by row
const talentsByRow: { [key: number]: TalentData[] } = {}

// Iterate through talent IDs (typical range is 1-4000+)
// We'll check each ID to see if it belongs to our tab
for (let talentID = 1; talentID < 5000; talentID++) {
    try {
        const talent = std.DBC.Talent.query({ID: talentID})
        if (!talent) continue
        
        const tabID = talent.TabID.get()
        
        // Only process talents from our target tab
        if (tabID === TAB_ID_TO_PRINT) {
            const tierID = talent.TierID.get()
            const colIndex = talent.ColumnIndex.get()
            
            // Collect all non-zero spell ranks
            const spellRanks: number[] = []
            for (let i = 0; i < 9; i++) {
                const spellID = talent.SpellRank.getIndex(i)
                if (spellID && spellID !== 0) {
                    spellRanks.push(spellID)
                }
            }
            
            // Try to get the talent name from the first spell rank
            let talentName = `Talent at (${tierID}, ${colIndex})`
            if (spellRanks.length > 0) {
                try {
                    const spell = std.Spells.load(spellRanks[0])
                    talentName = spell.Name.enGB.get()
                } catch (e) {
                    // If spell doesn't exist, use generic name
                    talentName = `Unknown Talent (${tierID}, ${colIndex})`
                }
            }
            
            if (!talentsByRow[tierID]) {
                talentsByRow[tierID] = []
            }
            
            talentsByRow[tierID].push({
                row: tierID,
                col: colIndex,
                spellRanks: spellRanks,
                talentID: talentID,
                talentName: talentName
            })
        }
    } catch (e) {
        // Talent ID doesn't exist, continue
        continue
    }
}

// Sort talents within each row by column
Object.keys(talentsByRow).forEach(rowKey => {
    talentsByRow[Number(rowKey)].sort((a, b) => a.col - b.col)
})

console.log(`\n========================================`)
console.log(`COPY-PASTE TEMPLATE`)
console.log(`========================================\n`)

// Print copy-paste template
Object.keys(talentsByRow).sort((a, b) => Number(a) - Number(b)).forEach(rowKey => {
    const rowNum = Number(rowKey)
    const talents = talentsByRow[rowNum]
    
    console.log(`// Row ${rowNum} (Tier ${rowNum + 1})`)
    console.log(`// ============================================================================\n`)
    
    talents.forEach(talent => {
        // Create a valid variable name from the talent name
        const varName = talent.talentName
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, '_')
            .replace(/_+/g, '_')
            .replace(/^_|_$/g, '')
        
        const kebabName = varName.toLowerCase().replace(/_/g, '-')
        
        console.log(`// ${talent.talentName} - Row ${talent.row}, Column ${talent.col}`)
        console.log(`export const ${varName} = ${treeVarName}.Talents`)
        console.log(`    .addGet("default", "${kebabName}")`)
        console.log(`    .Position.set(${talent.row}, ${talent.col})\n`)
        
        if (talent.spellRanks.length > 0) {
            const rankText = talent.spellRanks.length === 1 ? 'rank' : 'ranks'
            console.log(`${varName}.Spells.add([${talent.spellRanks.join(', ')}]) // ${talent.spellRanks.length} ${rankText}\n`)
        } else {
            console.log(`// WARNING: No spell ranks found for this talent!\n`)
        }
    })
    
    console.log(``)
})

console.log(`\n========================================`)
console.log(`PRINTER COMPLETE`)
const totalTalents = Object.values(talentsByRow).reduce((sum, row) => sum + row.length, 0)
console.log(`Found ${totalTalents} talents in Tab ${TAB_ID_TO_PRINT}`)
console.log(`========================================\n`)
