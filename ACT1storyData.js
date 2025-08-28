/**
 * @file ACT1storyData.js
 * @description Complete Act 1 narrative for Samsara Saga - The Three Trials of Dharmapura
 * @version 5.0.0
 * @license MIT
 *
 * This file contains the complete narrative structure for Act 1 as specified,
 * including all five quests with full Nakshatra-specific choices and solutions.
 */

window.ACT1_STORY_DATA = {

    // ===== PROLOGUE: AWAKENING =====

    "JOURNEY_START": {
        "title": "Awakening",
        "text": "Your consciousness coalesces, and you find yourself in the village of Dharmapura.",
        "choices": [
            { "text": "Enter the village square...", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    // ===== QUEST 1: THE ELDER'S DILEMMA =====

    "DHARMAPURA_SQUARE": {
        "title": "Dharmapura Square",
        "text": "The village square is tense due to a debate between the Elder and the Priestess over a semi-petrified Banyan tree.",
        "questStatus": "The Elder's Dilemma - Active",
        "interactions": [
            { "verb": "Examine", "noun": "Banyan Tree", "scene": "EXAMINE_BANYAN" },
            { "verb": "Listen to", "noun": "The Debate", "scene": "LISTEN_DEBATE" },
            { "verb": "Talk to", "noun": "The Village Elder", "scene": "TALK_ELDER" },
            { "verb": "Talk to", "noun": "The Priestess", "scene": "TALK_PRIESTESS" },
            { "verb": "Observe", "noun": "The Villagers", "scene": "OBSERVE_VILLAGERS" }
        ]
    },

    "LISTEN_DEBATE": {
        "title": "The Debate",
        "text": "The Elder wants to use the tree's wood for repairs, while the Priestess calls it a sacred ancestor. She poses a riddle: \"When the root of tradition and the branch of necessity pull the world apart, where does a soul find its balance?\"",
        "choices": [
            { "text": "Return to the square.", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    "EXAMINE_BANYAN": {
        "title": "The Ancient Banyan",
        "text": "The ancient Banyan tree feels powerful but has a stagnant energy.",
        "choices": [
            // Deva Gana Nakshatras
            { "text": "[Ashwini] Use your healing senses to diagnose the tree.", "nextScene": "BANYAN_SOLUTION_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Anuradha] Attempt to commune with the tree's indwelling spirit.", "nextScene": "BANYAN_SOLUTION_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Shravana] Sit and listen to the whispers of the tree's history.", "nextScene": "BANYAN_SOLUTION_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Mrigashira] Search for hidden patterns in the tree's growth.", "nextScene": "BANYAN_SOLUTION_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Punarvasu] Examine the tree for signs of regeneration.", "nextScene": "BANYAN_SOLUTION_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] Channel spiritual energy into the tree's core.", "nextScene": "BANYAN_SOLUTION_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Hasta] Use your skilled hands to feel the tree's texture.", "nextScene": "BANYAN_SOLUTION_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Swati] Feel the air currents around the tree.", "nextScene": "BANYAN_SOLUTION_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Revati] Connect with the tree's nourishing essence.", "nextScene": "BANYAN_SOLUTION_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            // Manushya Gana Nakshatras
            { "text": "[Bharani] Look for signs of death and renewal in the tree.", "nextScene": "BANYAN_SOLUTION_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Rohini] Check if the tree can still grow and flourish.", "nextScene": "BANYAN_SOLUTION_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Ardra] Feel the emotional energy emanating from the tree.", "nextScene": "BANYAN_SOLUTION_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Purva Phalguni] Sense if the tree still experiences joy.", "nextScene": "BANYAN_SOLUTION_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] Assess the tree's structural security.", "nextScene": "BANYAN_SOLUTION_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Purva Ashadha] Try to invigorate the tree's energy.", "nextScene": "BANYAN_SOLUTION_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] Determine what would be the highest good for the tree.", "nextScene": "BANYAN_SOLUTION_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Purva Bhadrapada] Look for ways to elevate the tree's condition.", "nextScene": "BANYAN_SOLUTION_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] Investigate the ground for blocked waterways.", "nextScene": "BANYAN_SOLUTION_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            
            // Rakshasa Gana Nakshatras
            { "text": "[Krittika] Try to burn away the illusion of what you see.", "nextScene": "BANYAN_SOLUTION_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Ashlesha] Examine the leaves for a subtle affliction.", "nextScene": "BANYAN_SOLUTION_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] Meditate at the roots to connect with the ancestral plane.", "nextScene": "BANYAN_SOLUTION_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Chitra] Look for hidden patterns or designs in the tree's structure.", "nextScene": "BANYAN_SOLUTION_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Vishakha] Analyze the tree from multiple perspectives simultaneously.", "nextScene": "BANYAN_SOLUTION_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Jyeshtha] Assess if the tree can be conquered or controlled.", "nextScene": "BANYAN_SOLUTION_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] Search for the 'root' of the problem beneath the tree.", "nextScene": "BANYAN_SOLUTION_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Dhanishtha] Scan the highest branches for something of value.", "nextScene": "BANYAN_SOLUTION_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] Analyze the tree as part of the village's ecosystem.", "nextScene": "BANYAN_SOLUTION_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            
            { "text": "Step back.", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    "TALK_ELDER": {
        "title": "The Village Elder",
        "text": "The Elder asks for your help to convince the Priestess that the tree's wood is needed for the village.",
        "choices": [
            // Nakshatra-specific choices for Elder conversation
            { "text": "[Ashwini] 'I can heal both the village and preserve the tree.'", "nextScene": "BANYAN_SOLUTION_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Bharani] 'This is a cycle of decay. It needs renewal.'", "nextScene": "BANYAN_SOLUTION_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Krittika] 'I will burn away the illusion clouding this issue.'", "nextScene": "BANYAN_SOLUTION_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Rohini] 'Let us mediate a compromise.'", "nextScene": "BANYAN_SOLUTION_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Mrigashira] 'I'll seek a fulfilling solution for everyone.'", "nextScene": "BANYAN_SOLUTION_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Ardra] 'Your sorrow must be channeled into action.'", "nextScene": "BANYAN_SOLUTION_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Punarvasu] 'The village can regenerate without harming the tree.'", "nextScene": "BANYAN_SOLUTION_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] 'Spiritual energy, not wood, is what you need.'", "nextScene": "BANYAN_SOLUTION_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Ashlesha] 'I sense a poison that can be both problem and solution.'", "nextScene": "BANYAN_SOLUTION_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] 'I will consult the ancestors about this tree.'", "nextScene": "BANYAN_SOLUTION_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Purva Phalguni] 'What this village lacks is not wood, but joy.'", "nextScene": "BANYAN_SOLUTION_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] 'A formal pact might solve this disagreement.'", "nextScene": "BANYAN_SOLUTION_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Hasta] 'My hands can craft a better solution than cutting the tree.'", "nextScene": "BANYAN_SOLUTION_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Chitra] 'Your building methods are flawed. I can show you a better way.'", "nextScene": "BANYAN_SOLUTION_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Swati] 'The energy here is stagnant. I can disperse it.'", "nextScene": "BANYAN_SOLUTION_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Vishakha] 'I can solve multiple problems at once.'", "nextScene": "BANYAN_SOLUTION_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Anuradha] 'Let me speak with the tree's spirit first.'", "nextScene": "BANYAN_SOLUTION_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Jyeshtha] 'Your leadership has failed. I will solve this myself.'", "nextScene": "BANYAN_SOLUTION_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] 'I'll find the root cause of this problem.'", "nextScene": "BANYAN_SOLUTION_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Purva Ashadha] 'I will invigorate the village and win this debate for you.'", "nextScene": "BANYAN_SOLUTION_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] 'This is a test of Dharma. Let us win the highest good.'", "nextScene": "BANYAN_SOLUTION_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Shravana] 'I will listen to what history tells us about this tree.'", "nextScene": "BANYAN_SOLUTION_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Dhanishtha] 'I can find abundance without cutting the tree.'", "nextScene": "BANYAN_SOLUTION_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] 'The village is a system. I will heal it all at once.'", "nextScene": "BANYAN_SOLUTION_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            { "text": "[Purva Bhadrapada] 'I can elevate your village without harming the tree.'", "nextScene": "BANYAN_SOLUTION_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] 'I can bring stability without cutting the tree.'", "nextScene": "BANYAN_SOLUTION_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            { "text": "[Revati] 'I can nourish both the village and the tree.'", "nextScene": "BANYAN_SOLUTION_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            { "text": "'I will consider your words.'", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    "TALK_PRIESTESS": {
        "title": "The Priestess",
        "text": "The Priestess asks for your help to restore the village's faith, arguing the malaise is not from the tree.",
        "choices": [
            // Nakshatra-specific choices for Priestess conversation (same solutions, different context)
            { "text": "[Ashwini] 'I can heal the tree and solve the village's problems.'", "nextScene": "BANYAN_SOLUTION_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Bharani] 'I can guide a ritual of renewal for the tree.'", "nextScene": "BANYAN_SOLUTION_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Krittika] 'I can burn away any illusion affecting the tree.'", "nextScene": "BANYAN_SOLUTION_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Rohini] 'I can help the tree grow despite its condition.'", "nextScene": "BANYAN_SOLUTION_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Mrigashira] 'I'll find a fulfilling path for all involved.'", "nextScene": "BANYAN_SOLUTION_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Ardra] 'The tree's sorrow can be transformed into action.'", "nextScene": "BANYAN_SOLUTION_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Punarvasu] 'Is there a ritual of regeneration that could aid the tree?'", "nextScene": "BANYAN_SOLUTION_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] 'Perhaps an act of collective faith is what is needed.'", "nextScene": "BANYAN_SOLUTION_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Ashlesha] 'The tree may be poisoned, but I can heal it.'", "nextScene": "BANYAN_SOLUTION_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] 'I will speak with the ancestors about this tree.'", "nextScene": "BANYAN_SOLUTION_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Purva Phalguni] 'The tree needs joy to revitalize it.'", "nextScene": "BANYAN_SOLUTION_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] 'We need a formal agreement to protect the tree.'", "nextScene": "BANYAN_SOLUTION_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Hasta] 'My hands can manifest a solution that preserves the tree.'", "nextScene": "BANYAN_SOLUTION_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Chitra] 'I see a pattern in the tree that others miss.'", "nextScene": "BANYAN_SOLUTION_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Swati] 'The energy here is stagnant. It needs to be dispersed.'", "nextScene": "BANYAN_SOLUTION_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Vishakha] 'I can achieve multiple goals at once with this tree.'", "nextScene": "BANYAN_SOLUTION_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Anuradha] 'I will commune with the tree's spirit directly.'", "nextScene": "BANYAN_SOLUTION_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Jyeshtha] 'I will take control of this situation myself.'", "nextScene": "BANYAN_SOLUTION_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] 'The root of the problem may lie beneath the tree.'", "nextScene": "BANYAN_SOLUTION_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Purva Ashadha] 'I can strengthen the tree's spiritual presence.'", "nextScene": "BANYAN_SOLUTION_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] 'What is the highest good for both tree and village?'", "nextScene": "BANYAN_SOLUTION_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Shravana] 'The tree's history may hold the answer.'", "nextScene": "BANYAN_SOLUTION_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Dhanishtha] 'The tree may hold untapped abundance.'", "nextScene": "BANYAN_SOLUTION_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] 'The village is a system. I will heal it all at once.'", "nextScene": "BANYAN_SOLUTION_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            { "text": "[Purva Bhadrapada] 'I can elevate the tree's status in the village.'", "nextScene": "BANYAN_SOLUTION_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] 'The tree may be blocking something vital.'", "nextScene": "BANYAN_SOLUTION_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            { "text": "[Revati] 'We must nourish the future to honor the past.'", "nextScene": "BANYAN_SOLUTION_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            { "text": "'I will think on this.'", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    "OBSERVE_VILLAGERS": {
        "title": "The Villagers",
        "text": "The villagers are divided, creating a feeling of frustration and helplessness.",
        "choices": [
            // Nakshatra-specific choices for Villager observation
            { "text": "[Ashwini] 'I can heal the division in this village.'", "nextScene": "BANYAN_SOLUTION_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Bharani] 'This is a cycle of decay. It needs to be renewed.'", "nextScene": "BANYAN_SOLUTION_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Krittika] 'The illusion of conflict can be burned away.'", "nextScene": "BANYAN_SOLUTION_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Rohini] 'I can help your village grow despite these challenges.'", "nextScene": "BANYAN_SOLUTION_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Mrigashira] 'There must be a third option they are not seeing.'", "nextScene": "BANYAN_SOLUTION_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Ardra] 'Their sorrow must be channeled into action.'", "nextScene": "BANYAN_SOLUTION_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Punarvasu] 'This village can recover without harming the tree.'", "nextScene": "BANYAN_SOLUTION_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] 'Your collective faith can solve this problem.'", "nextScene": "BANYAN_SOLUTION_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Ashlesha] 'This conflict is like a poison in your midst.'", "nextScene": "BANYAN_SOLUTION_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] 'What would your ancestors say about this tree?'", "nextScene": "BANYAN_SOLUTION_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Purva Phalguni] 'What this village lacks is not wood, but joy.'", "nextScene": "BANYAN_SOLUTION_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] 'You need security, not just solutions.'", "nextScene": "BANYAN_SOLUTION_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Hasta] 'I can show you how to manifest what you need.'", "nextScene": "BANYAN_SOLUTION_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Chitra] 'I see a pattern in your conflict that you don't.'", "nextScene": "BANYAN_SOLUTION_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Swati] 'The energy here is stagnant. It needs to be dispersed.'", "nextScene": "BANYAN_SOLUTION_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Vishakha] 'They are focused on one problem. I will solve them all.'", "nextScene": "BANYAN_SOLUTION_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Anuradha] 'Your devotion to both sides is admirable.'", "nextScene": "BANYAN_SOLUTION_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Jyeshtha] 'This village needs stronger leadership.'", "nextScene": "BANYAN_SOLUTION_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] 'The root of your conflict lies deeper than the tree.'", "nextScene": "BANYAN_SOLUTION_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Purva Ashadha] 'I can strengthen your community's spirit.'", "nextScene": "BANYAN_SOLUTION_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] 'What is the highest good for your village?'", "nextScene": "BANYAN_SOLUTION_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Shravana] 'Let me listen to all your stories about the tree.'", "nextScene": "BANYAN_SOLUTION_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Dhanishtha] 'There is untapped abundance in your village.'", "nextScene": "BANYAN_SOLUTION_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] 'Your village is a system that needs healing.'", "nextScene": "BANYAN_SOLUTION_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            { "text": "[Purva Bhadrapada] 'Someone is being ignored. I will find them.'", "nextScene": "BANYAN_SOLUTION_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] 'I can bring stability to your village.'", "nextScene": "BANYAN_SOLUTION_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            { "text": "[Revati] 'I can nourish both your traditions and your needs.'", "nextScene": "BANYAN_SOLUTION_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            { "text": "Return to the square.", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    // ===== QUEST 1 SOLUTION SCENES (ALL 27 NAKSHATRAS) =====

    "BANYAN_SOLUTION_ASHWINI": {
        "title": "A Healer's Insight",
        "text": "Your healing senses confirm the Banyan is sick. A quest to find rare ingredients for a spiritual poultice could restore its vitality.",
        "choices": [{ "text": "Accept the quest.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Heal the Tree" } }]
    },

    "BANYAN_SOLUTION_BHARANI": {
        "title": "The Path of Renewal",
        "text": "You propose a grand village ceremony where the tree is respectfully felled, its wood used for repairs, and a new sapling consecrated in its place, framing the act as a necessary cycle of renewal.",
        "choices": [{ "text": "Propose the ceremony.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Ceremony of Renewal" } }]
    },

    "BANYAN_SOLUTION_KRITTIKA": {
        "title": "Burning the Illusion",
        "text": "You 'burn away' the illusion of age, discovering the tree is not ancient, but a common Banyan afflicted by a mundane disease. This shatters the Priestess's argument.",
        "choices": [{ "text": "Reveal the truth.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Revealed the Illusion" } }]
    },

    "BANYAN_SOLUTION_ROHINI": {
        "title": "The Art of Compromise",
        "text": "You propose a town council meeting. You guide the Elder and Priestess to a compromise: carefully pruning deadwood for repairs in return for a new annual festival honoring the tree.",
        "choices": [{ "text": "Call the council meeting.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Brokered a Compromise" } }]
    },

    "BANYAN_SOLUTION_MRIGASHIRA": {
        "title": "The Seeker's Path",
        "text": "Your seeking nature leads you to a hidden quarry of resilient stone behind the village waterfall—a far better building material that makes the Elder's argument moot.",
        "choices": [{ "text": "Reveal the quarry.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Found the Quarry" } }]
    },

    "BANYAN_SOLUTION_ARDRA": {
        "title": "Tears to Action",
        "text": "You channel the village's collective sorrow and frustration, inspiring a community project to perform all repairs through collective effort, uniting the factions through shared work.",
        "choices": [{ "text": "Inspire the villagers.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Inspired Community Action" } }]
    },

    "BANYAN_SOLUTION_PUNARVASU": {
        "title": "The Gift of Regeneration",
        "text": "You perform a ritual of regeneration that causes the tree to gift a perfectly formed, supernaturally strong fallen branch to the village—enough for critical repairs without harming the tree.",
        "choices": [{ "text": "Perform the ritual.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Ritual of Regeneration" } }]
    },

    "BANYAN_SOLUTION_PUSHYA": {
        "title": "Nourishment of Faith",
        "text": "You lead the villagers in a day-long chant and offering at the tree's base. This act of collective worship creates such a surge of positive energy that it purifies the village.",
        "choices": [{ "text": "Lead the chant.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Act of Collective Faith" } }]
    },

    "BANYAN_SOLUTION_ASHLESHA": {
        "title": "Serpentine Wit",
        "text": "You secretly apply a non-lethal poison to the tree's leaves that makes them emit a foul smell, then 'discover' this affliction, framing it as a divine omen that allows felling with spiritual justification.",
        "choices": [{ "text": "Enact your plan.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "A Deceptive Omen" } }]
    },

    "BANYAN_SOLUTION_MAGHA": {
        "title": "Ancestral Testimony",
        "text": "You meditate at the Banyan's roots, sending your consciousness into the ancestral plane. You speak with the spirit of the village founder, returning with undeniable testimony.",
        "choices": [{ "text": "Share the ancestor's words.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Received Ancestral Guidance" } }]
    },

    "BANYAN_SOLUTION_PURVA_PHALGUNI": {
        "title": "The Cure of Joy",
        "text": "You organize a village festival at the base of the tree with music and dance. The resulting outpouring of positive emotion revitalizes both the tree and the village.",
        "choices": [{ "text": "Organize the festival.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Festival of Joy" } }]
    },

    "BANYAN_SOLUTION_UTTARA_PHALGUNI": {
        "title": "The Binding Pact",
        "text": "You forge a formal agreement between the Elder and Priestess, witnessed by the council. The pact specifies exactly which branches can be pruned and outlines new rituals the village must perform.",
        "choices": [{ "text": "Draft the agreement.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Forged a Pact" } }]
    },

    "BANYAN_SOLUTION_HASTA": {
        "title": "The Crafter's Hand",
        "text": "You use your skills to show the villagers how to make better bricks from local clay and thatch stronger roofs from river reeds, fixing the community's problems without needing the Banyan's wood.",
        "choices": [{ "text": "Teach new crafting methods.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Innovated with Crafts" } }]
    },

    "BANYAN_SOLUTION_CHITRA": {
        "title": "A Flaw in the System",
        "text": "You teach the villagers superior construction methods, allowing them to complete all repairs using only a fraction of the available wood, rendering the debate pointless.",
        "choices": [{ "text": "Demonstrate superior techniques.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Systemic Improvement" } }]
    },

    "BANYAN_SOLUTION_SWATI": {
        "title": "Scattered Like the Wind",
        "text": "You craft blessed chimes and place them at key points, allowing the wind to carry their song and disperse the stagnant spiritual energy that's causing the village's malaise.",
        "choices": [{ "text": "Craft and place the chimes.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Dispersed Stagnation" } }]
    },

    "BANYAN_SOLUTION_VISHAKHA": {
        "title": "Achieving Many Goals",
        "text": "You pursue multiple solutions simultaneously—searching for herbs, mediating, and investigating the tree—achieving a swift and decisive victory through sheer force of ambition.",
        "choices": [{ "text": "Begin your multi-pronged effort.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Multi-pronged Victory" } }]
    },

    "BANYAN_SOLUTION_ANURADHA": {
        "title": "The Worshipful Heart",
        "text": "You speak directly to the dryad dwelling within the Banyan. It asks you to perform a specific ritual of devotion to give it the strength to fight off the negativity affecting both it and the village.",
        "choices": [{ "text": "Perform the requested ritual.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Aided the Dryad" } }]
    },

    "BANYAN_SOLUTION_JYESHTHA": {
        "title": "The Right to Conquer",
        "text": "You complete a difficult solo quest to earn enough authority to impose your own solution. By proving your capabilities, you gain the right to make decisions for the grateful village.",
        "choices": [{ "text": "Declare your intent to lead.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Seized Leadership" } }]
    },

    "BANYAN_SOLUTION_MULA": {
        "title": "The Root of the Problem",
        "text": "Your intuition leads you to excavate beneath the tree's roots, revealing a cursed object. Destroying it heals both the tree and the village instantly.",
        "choices": [{ "text": "Begin digging.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Destroy the Cursed Object" } }]
    },

    "BANYAN_SOLUTION_PURVA_ASHADHA": {
        "title": "Invigorating Spirit",
        "text": "You use your ability to win a major debate. You can choose to side with either the Elder or Priestess and argue their point so convincingly that you unite the village behind that vision.",
        "choices": [{ "text": "Declare your chosen side.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Won the Debate" } }]
    },

    "BANYAN_SOLUTION_UTTARA_ASHADHA": {
        "title": "The Highest Good",
        "text": "You make a 'Dharmic Declaration' that transcends the immediate problem, arguing that working together to find a non-destructive solution will earn a greater cosmic boon than any wood could provide.",
        "choices": [{ "text": "Make your declaration.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Declared a Higher Path" } }]
    },

    "BANYAN_SOLUTION_SHRAVANA": {
        "title": "The Whispering Past",
        "text": "You sit beneath the tree and listen. Your power allows you to hear the village's history, learning that the founding charter buried at the tree's roots grants special rights that solve deeper problems.",
        "choices": [{ "text": "Reveal the lost charter.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Uncovered the Charter" } }]
    },

    "BANYAN_SOLUTION_DHANISHTHA": {
        "title": "The Gift of Abundance",
        "text": "You discover rare, beautiful flowers on the Banyan's highest branches. A traveling merchant offers the village a great sum for more—enough to fund all repairs and more, making the tree more valuable alive.",
        "choices": [{ "text": "Climb the tree.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Found Abundance" } }]
    },

    "BANYAN_SOLUTION_SHATABHISHA": {
        "title": "The Hundred Medicines",
        "text": "You create 100 small offerings and have the villagers place them throughout the area. This large-scale healing ritual cures the spiritual malaise at a systemic level, restoring harmony to the entire ecosystem.",
        "choices": [{ "text": "Begin the systemic healing.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Systemic Healing" } }]
    },

    "BANYAN_SOLUTION_PURVA_BHADRAPADA": {
        "title": "The Voice of the Ignored",
        "text": "You find a disenfranchised woodcutter who's been ignored by both factions. By raising his status in the council's eyes, he reveals a sustainable method to harvest deadwood without harming the living tree.",
        "choices": [{ "text": "Champion the woodcutter.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Empowered the Woodcutter" } }]
    },

    "BANYAN_SOLUTION_UTTARA_BHADRAPADA": {
        "title": "The Hidden Spring",
        "text": "You discover the tree's deep roots are blocking a subterranean spring. By performing a ritual to slightly shift the roots, you release the spring, creating a new well and healing the tree from below.",
        "choices": [{ "text": "Unblock the spring.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Revealed the Spring" } }]
    },

    "BANYAN_SOLUTION_REVATI": {
        "title": "The Path of Nourishment",
        "text": "You find a sapling and imbue it with your spiritual energy. You propose taking the old tree's wood only after collectively planting and consecrating this new sapling, ensuring the village's spiritual lineage continues.",
        "choices": [{ "text": "Propose the compromise.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Nourished the Future" } }]
    },

    "DILEMMA_RESOLUTION": {
        "title": "A Path Forward",
        "text": "Your unique insight has resolved the dilemma, and the villagers look at you with respect.",
        "questStatus": "The Elder's Dilemma - Completed",
        "choices": [
            { "text": "Prepare for the next trial.", "nextScene": "QUEST_2_START" }
        ]
    },

    // ===== QUEST 2: THE POISONED RIVER =====

    "QUEST_2_START": {
        "title": "The Poisoned River",
        "text": "A vital tributary has been corrupted by a spiritual blight, and the villagers turn to you for help.",
        "questStatus": "The Poisoned River - Active",
        "choices": [
            { "text": "Go to the riverbank to investigate.", "nextScene": "RIVERBANK" }
        ]
    },

    "RIVERBANK": {
        "title": "The Corrupted Waters",
        "text": "The water is toxic, the plants are withered, and the air is heavy with sorrow.",
        "interactions": [
            { "verb": "Examine", "noun": "Water", "scene": "EXAMINE_WATER" },
            { "verb": "Follow", "noun": "River Upstream", "scene": "FOLLOW_UPSTREAM" },
            { "verb": "Speak to", "noun": "Water Spirits", "scene": "SPEAK_WATER_SPIRITS" },
            { "verb": "Analyze", "noun": "Surrounding Plants", "scene": "ANALYZE_PLANTS" }
        ]
    },

    "EXAMINE_WATER": {
        "title": "Tainted Waters",
        "text": "You determine the water is tainted by a curse, not a natural poison.",
        "choices": [
            // 27 Nakshatra-specific choices for examining water
            { "text": "[Ashwini] Use healing energy to purify a small sample.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Bharani] Look for signs of death and renewal in the water.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Krittika] Try to burn away the illusion in the water.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Rohini] Check if the water can still support growth.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Mrigashira] Search for patterns in the water's flow.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Ardra] Feel the emotional energy in the water.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Punarvasu] Test if the water can be regenerated.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] Channel spiritual energy into the water.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Ashlesha] Examine the water for a subtle poison.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] Connect with ancestral water spirits.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Purva Phalguni] Sense if the water still experiences joy.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] Assess the water's security and stability.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Hasta] Use your hands to feel the water's texture.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Chitra] Look for hidden patterns in the water's surface.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Swati] Feel the air currents above the water.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Vishakha] Analyze the water from multiple perspectives.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Anuradha] Commune with the water's spirit.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Jyeshtha] Assess if the water can be controlled.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] Search for the root cause of the water's corruption.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Purva Ashadha] Try to invigorate the water's energy.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] Determine what would be the highest good for the river.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Shravana] Listen to the water's story.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Dhanishtha] Look for valuable elements in the water.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] Analyze the water as part of the ecosystem.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            { "text": "[Purva Bhadrapada] Look for ways to elevate the water's condition.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] Investigate the riverbed for blockages.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            { "text": "[Revati] Connect with the water's nourishing essence.", "nextScene": "FOLLOW_UPSTREAM", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            { "text": "Return to the riverbank.", "nextScene": "RIVERBANK" }
        ]
    },

    "FOLLOW_UPSTREAM": {
        "title": "Following the Source",
        "text": "You follow the river into the forest and find a small cave from which the corrupted water flows.",
        "choices": [
            { "text": "Enter the cave.", "nextScene": "CORRUPTED_CAVE" },
            { "text": "Return to the riverbank.", "nextScene": "RIVERBANK" }
        ]
    },

    "SPEAK_WATER_SPIRITS": {
        "title": "Anguished Spirits",
        "text": "The spirits appear as anguished forms and try to warn you about something upstream.",
        "choices": [
            { "text": "Return to the riverbank.", "nextScene": "RIVERBANK" }
        ]
    },

    "ANALYZE_PLANTS": {
        "title": "Withered Flora",
        "text": "You find a single, impossibly pure lotus petal among the withered flora.",
        "choices": [
            { "text": "Take the lotus petal.", "nextScene": "RIVERBANK", "worldStateTriggers": { "has_lotus_petal": true } },
            { "text": "Return to the riverbank.", "nextScene": "RIVERBANK" }
        ]
    },

    "CORRUPTED_CAVE": {
        "title": "The Dark Crystal",
        "text": "You find a dark crystal protected by a barrier of negative energy, poisoning the spring. To solve the puzzle, you must counter it.",
        "choices": [
            { "text": "Use the impossibly fragrant Lotus Petal.", "nextScene": "PURIFY_CRYSTAL_SUCCESS", "condition": (state) => state.has_lotus_petal === true },
            { "text": "Leave the cave for now.", "nextScene": "FOLLOW_UPSTREAM" }
        ]
    },

    "PURIFY_CRYSTAL_SUCCESS": {
        "title": "Crystal Purified",
        "text": "You neutralize the crystal, and the spring water runs clear. You have completed the quest.",
        "questStatus": "The Poisoned River - Completed",
        "choices": [
            { "text": "Return to Dharmapura a hero.", "nextScene": "QUEST_3_START" }
        ]
    },

    // ===== QUEST 3: THE KING'S TAX COLLECTOR =====

    "QUEST_3_START": {
        "title": "The King's Tax Collector",
        "text": "A corrupt official, Adhikari Dhanadatta, has arrived demanding an impossible tax.",
        "questStatus": "The King's Tax Collector - Active",
        "choices": [
            { "text": "Meet the tax collector in the village square.", "nextScene": "TAX_COLLECTOR_SQUARE" }
        ]
    },

    "TAX_COLLECTOR_SQUARE": {
        "title": "The Tax Collector's Demand",
        "text": "Dhanadatta, flanked by guards, threatens to take villagers as indentured servants if the tax isn't paid.",
        "interactions": [
            { "verb": "Speak to", "noun": "Dhanadatta", "scene": "SPEAK_TAX_COLLECTOR" },
            { "verb": "Examine", "noun": "Tax Records", "scene": "EXAMINE_TAX_RECORDS" },
            { "verb": "Consult", "noun": "Village Elder", "scene": "CONSULT_ELDER_TAX" },
            { "verb": "Observe", "noun": "The Guards", "scene": "OBSERVE_GUARDS" }
        ]
    },

    "SPEAK_TAX_COLLECTOR": {
        "title": "Confronting the Collector",
        "text": "He sneers and demands 500 gold pieces by dawn, or he'll take ten villagers.",
        "choices": [
            // 27 Nakshatra-specific choices for the tax collector
            { "text": "[Ashwini] 'I can heal what ails you, if you'll be reasonable.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Bharani] 'This tax cycle needs renewal and purification.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Krittika] 'I see through the illusion of your authority.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Rohini] 'Let us grow a compromise together.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Mrigashira] 'There must be a fulfilling solution for all.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Ardra] 'Your threats bring tears that will become action.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Punarvasu] 'This village can recover, with proper time.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] 'Spiritual wealth exceeds material wealth.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Ashlesha] 'Your poison can be countered with another.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] 'The ancestors would judge your actions harshly.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Purva Phalguni] 'Perhaps we can make this collection enjoyable.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] 'We need a formal agreement that provides security.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Hasta] 'We can craft a solution with our hands.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Chitra] 'I see a pattern in your collections that others miss.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Swati] 'Your demands scatter like leaves in the wind.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Vishakha] 'I can solve multiple problems at once here.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Anuradha] 'Let us worship together and find a solution.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Jyeshtha] 'Your authority is challenged by my presence.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] 'I'll destroy the root of this corruption.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Purva Ashadha] 'I will strengthen our position in this matter.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] 'What is the highest good in this situation?'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Shravana] 'I've heard stories about your methods.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Dhanishtha] 'There is abundance here you do not see.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] 'This tax system needs systemic healing.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            { "text": "[Purva Bhadrapada] 'Someone's voice is being ignored here.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] 'We need stability, not disruption.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            { "text": "[Revati] 'We can nourish both the kingdom and village.'", "nextScene": "TAX_RESOLUTION", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            { "text": "Step back and consider your options.", "nextScene": "TAX_COLLECTOR_SQUARE" }
        ]
    },

    "EXAMINE_TAX_RECORDS": {
        "title": "Forged Documents",
        "text": "You notice the ledger amounts have been altered and the royal seal is a forgery.",
        "choices": [
            { "text": "Return to the square.", "nextScene": "TAX_COLLECTOR_SQUARE", "worldStateTriggers": { "discovered_fraud": true } }
        ]
    },

    "CONSULT_ELDER_TAX": {
        "title": "Elder's Suspicion",
        "text": "The Elder confirms this is not the regular tax collector and the amount is fraudulent.",
        "choices": [
            { "text": "Return to the square.", "nextScene": "TAX_COLLECTOR_SQUARE", "worldStateTriggers": { "elder_confirms_fraud": true } }
        ]
    },

    "OBSERVE_GUARDS": {
        "title": "Hired Mercenaries",
        "text": "You realize the guards are hired mercenaries, not royal soldiers.",
        "choices": [
            { "text": "Return to the square.", "nextScene": "TAX_COLLECTOR_SQUARE", "worldStateTriggers": { "guards_are_fake": true } }
        ]
    },

    "TAX_RESOLUTION": {
        "title": "Tax Collector Defeated",
        "text": "You have resolved the tax collector situation, and your reputation grows.",
        "questStatus": "The King's Tax Collector - Completed",
        "choices": [
            { "text": "Accept the village's thanks.", "nextScene": "QUEST_4_START" }
        ]
    },

    // ===== QUEST 4: THE FORGOTTEN TEMPLE =====

    "QUEST_4_START": {
        "title": "The Forgotten Temple",
        "text": "The Elder reveals you have passed the three trials of Dharmapura and must now seek a forgotten temple.",
        "questStatus": "The Forgotten Temple - Active",
        "choices": [
            { "text": "Journey to the eastern ridge.", "nextScene": "TEMPLE_APPROACH" }
        ]
    },

    "TEMPLE_APPROACH": {
        "title": "The Ancient Path",
        "text": "You find an overgrown path leading up a ridge, marked by ancient, worn stone markers.",
        "interactions": [
            { "verb": "Examine", "noun": "Stone Markers", "scene": "EXAMINE_STONE_MARKERS" },
            { "verb": "Clear", "noun": "Overgrown Path", "scene": "CLEAR_OVERGROWN_PATH" },
            { "verb": "Listen to", "noun": "The Forest", "scene": "LISTEN_TO_FOREST" }
        ]
    },

    "EXAMINE_STONE_MARKERS": {
        "title": "Ancient Warnings",
        "text": "The stone markers bear inscriptions about the 'Temple of the Celestial Wheel' and warnings about 'approaching with a pure heart.'",
        "choices": [
            { "text": "Continue to the temple.", "nextScene": "TEMPLE_ENTRANCE" }
        ]
    },

    "CLEAR_OVERGROWN_PATH": {
        "title": "Path Revealed",
        "text": "You clear away the overgrowth, revealing stone steps arranged in a pattern that mimics celestial movements.",
        "choices": [
            { "text": "Continue to the temple.", "nextScene": "TEMPLE_ENTRANCE" }
        ]
    },

    "LISTEN_TO_FOREST": {
        "title": "Forest Whispers",
        "text": "You detect a subtle hum���a vibration that seems to emanate from further up the ridge with a rhythmic quality, almost like a chant.",
        "choices": [
            { "text": "Continue to the temple.", "nextScene": "TEMPLE_ENTRANCE" }
        ]
    },

    "TEMPLE_ENTRANCE": {
        "title": "Temple of 27 Pillars",
        "text": "You find a magnificent temple carved into the mountain with 27 pillars and a sealed door.",
        "interactions": [
            { "verb": "Examine", "noun": "Temple Pillars", "scene": "EXAMINE_TEMPLE_PILLARS" },
            { "verb": "Study", "noun": "Door Mechanism", "scene": "STUDY_DOOR_MECHANISM" },
            { "verb": "Meditate", "noun": "At the Entrance", "scene": "MEDITATE_AT_ENTRANCE" }
        ]
    },

    "EXAMINE_TEMPLE_PILLARS": {
        "title": "The Nakshatra Pillars",
        "text": "You find the pillar corresponding to your birth star has a recess for an offering.",
        "choices": [
            { "text": "Make an offering based on your Nakshatra.", "nextScene": "TEMPLE_INNER_SANCTUM", "condition": (state) => state.made_offering === true && state.solved_puzzle === true && state.aligned_energy === true },
            { "text": "Return to the entrance.", "nextScene": "TEMPLE_ENTRANCE", "worldStateTriggers": { "made_offering": true } }
        ]
    },

    "STUDY_DOOR_MECHANISM": {
        "title": "Celestial Lock",
        "text": "The door has a complex astronomical lock.",
        "choices": [
            { "text": "Attempt to solve the celestial puzzle.", "nextScene": "TEMPLE_INNER_SANCTUM", "condition": (state) => state.made_offering === true && state.solved_puzzle === true && state.aligned_energy === true },
            { "text": "Return to the entrance.", "nextScene": "TEMPLE_ENTRANCE", "worldStateTriggers": { "solved_puzzle": true } }
        ]
    },

    "MEDITATE_AT_ENTRANCE": {
        "title": "Spiritual Alignment",
        "text": "You sense the temple is aligned with cosmic forces and you must resonate with them to enter.",
        "choices": [
            { "text": "Align your energy with the temple.", "nextScene": "TEMPLE_INNER_SANCTUM", "condition": (state) => state.made_offering === true && state.solved_puzzle === true && state.aligned_energy === true },
            { "text": "Return to the entrance.", "nextScene": "TEMPLE_ENTRANCE", "worldStateTriggers": { "aligned_energy": true } }
        ]
    },

    "TEMPLE_INNER_SANCTUM": {
        "title": "The Celestial Wheel",
        "text": "The doors open to reveal the Celestial Wheel, a repository of cosmic wisdom.",
        "choices": [
            { "text": "Approach the Celestial Wheel.", "nextScene": "CELESTIAL_WHEEL" }
        ]
    },

    "CELESTIAL_WHEEL": {
        "title": "Cosmic Wisdom",
        "text": "The Wheel shows you your birth pattern, and a voice offers you the wisdom of the stars.",
        "choices": [
            { "text": "Accept the cosmic wisdom.", "nextScene": "TEMPLE_RESOLUTION" }
        ]
    },

    "TEMPLE_RESOLUTION": {
        "title": "Transformed by Wisdom",
        "text": "The wisdom of the Wheel flows into you, and you feel transformed.",
        "questStatus": "The Forgotten Temple - Completed",
        "choices": [
            { "text": "Return to Dharmapura with your new wisdom.", "nextScene": "QUEST_5_START" }
        ]
    },

    // ===== QUEST 5: THE CELESTIAL ALIGNMENT =====

    "QUEST_5_START": {
        "title": "The Celestial Alignment",
        "text": "You learn a rare celestial alignment will occur in three days, bringing great potential and great danger.",
        "questStatus": "The Celestial Alignment - Active",
        "choices": [
            { "text": "Ask about the potential dangers.", "nextScene": "ALIGNMENT_DANGERS" }
        ]
    },

    "ALIGNMENT_DANGERS": {
        "title": "Thinning Barriers",
        "text": "The Priestess warns that the barriers between realms are thinning and asks for your help.",
        "choices": [
            { "text": "Offer to help prepare the village.", "nextScene": "PREPARE_VILLAGE" }
        ]
    },

    "PREPARE_VILLAGE": {
        "title": "Village Preparations",
        "text": "You've made preparations, but sense a growing cosmic disturbance.",
        "choices": [
            { "text": "Perform a final survey of the village.", "nextScene": "VILLAGE_SURVEY" }
        ]
    },

    "VILLAGE_SURVEY": {
        "title": "Three Points of Vulnerability",
        "text": "You identify three points of vulnerability: the Banyan tree (Sattva), the river source (Rajas), and the boundary shrine (Tamas).",
        "choices": [
            { "text": "Focus on the Banyan tree (Sattva).", "nextScene": "PROTECT_SATTVA" },
            { "text": "Focus on the river source (Rajas).", "nextScene": "PROTECT_RAJAS" },
            { "text": "Focus on the boundary shrine (Tamas).", "nextScene": "PROTECT_TAMAS" }
        ]
    },

    "PROTECT_SATTVA": {
        "title": "Guardian of Purity",
        "text": "As the alignment begins, you must channel the corresponding energy (Sattva).",
        "choices": [
            { "text": "Channel the sattva energy.", "nextScene": "ALIGNMENT_CLIMAX", "worldStateTriggers": { "channeled_sattva": true } }
        ]
    },

    "PROTECT_RAJAS": {
        "title": "Keeper of Action",
        "text": "As the alignment begins, you must channel the corresponding energy (Rajas).",
        "choices": [
            { "text": "Channel the rajas energy.", "nextScene": "ALIGNMENT_CLIMAX", "worldStateTriggers": { "channeled_rajas": true } }
        ]
    },

    "PROTECT_TAMAS": {
        "title": "Warden of Darkness",
        "text": "As the alignment begins, you must channel the corresponding energy (Tamas).",
        "choices": [
            { "text": "Channel the tamas energy.", "nextScene": "ALIGNMENT_CLIMAX", "worldStateTriggers": { "channeled_tamas": true } }
        ]
    },

    "ALIGNMENT_CLIMAX": {
        "title": "Cosmic Harmony",
        "text": "You perceive all 27 Nakshatras in perfect harmony.",
        "choices": [
            { "text": "Embrace your cosmic role.", "nextScene": "ALIGNMENT_RESOLUTION" }
        ]
    },

    "ALIGNMENT_RESOLUTION": {
        "title": "Cosmic Guardian",
        "text": "The alignment passes, Dharmapura is blessed, and the villagers recognize you as a cosmic guardian.",
        "questStatus": "The Celestial Alignment - Completed",
        "choices": [
            { "text": "Accept your destiny.", "nextScene": "GAME_CONCLUSION" }
        ]
    },

    "GAME_CONCLUSION": {
        "title": "Journey's End... For Now",
        "text": "Your journey in Dharmapura has transformed you and the village. You sense this is just the beginning.",
        "choices": [
            { "text": "The End... For Now", "nextScene": "ACT1_ENDING" },
            { "text": "Continue your journey...", "nextScene": "ACT1_ENDING" }
        ]
    },

    "ACT1_ENDING": {
        "title": "The First Trial Completed",
        "text": "As you complete the final challenge, a sense of accomplishment washes over you. The village of Dharmapura seems brighter, its people more at peace. Yet, you sense that your journey has only just begun. A new path opens before you, leading to unknown challenges and greater mysteries.",
        "choices": [
            {
                "id": "continue_to_act2",
                "text": "Continue your journey...",
                "nextAct": 2,
                "effects": {
                    "karma": 10,
                    "dharmicProfile": { "moksha": 5 }
                }
            }
        ]
    }

};

console.log('✅ ACT1_STORY_DATA loaded successfully with complete 5-quest narrative structure.');
