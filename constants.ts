

// A comprehensive list of keywords to perform client-side topic filtering.
// This prevents API calls for irrelevant queries.

export const HINDU_MYTHOLOGY_KEYWORDS = new Set([
  // Deities & Figures
  'shiva', 'vishnu', 'brahma', 'ganesha', 'ganpati', 'durga', 'kali', 'saraswati', 'lakshmi', 'parvati',
  'rama', 'krishna', 'hanuman', 'sita', 'radha', 'indra', 'agni', 'varuna', 'vayu', 'surya',
  'chandra', 'yama', 'kubera', 'kama', 'rati', 'ravana', 'kumbhakarna', 'vibhipshan', 'bali',
  'sugriva', 'vali', 'jatayu', 'sampati', 'nandi', 'garuda', 'shesha', 'vasuki', 'aditi', 'diti',
  'kashyapa', 'manu', 'narada', 'vyasa', 'valmiki', 'drona', 'bhishma', 'arjuna', 'karna', 'yudhishthira',
  'bhim', 'nakula', 'sahadeva', 'draupadi', 'kunti', 'gandhari', 'shakuni', 'duryodhana', 'ashwatthama',
  'parashurama', 'vamana', 'narasimha', 'kurma', 'matsya', 'varaha', 'kalki', 'buddha', 'balarama',
  'mohini', 'dhanvantari', 'kartikeya', 'murugan', 'ayyappa', 'daksha', 'sati', 'ganga', 'yamuna',
  'trimurti', 'mahadeva', 'patanjali',

  // Texts
  'veda', 'vedas', 'rigveda', 'yajurveda', 'samaveda', 'atharvaveda',
  'upanishad', 'upanishads', 'purana', 'puranas', 'shiva purana', 'vishnu purana', 'bhagavata',
  'ramayana', 'mahabharata', 'gita', 'bhagavad gita', 'dharmashastra', 'manusmriti', 'arthashastra',
  'natyashastra', 'tantra', 'agama', 'sutra', 'yoga sutra',

  // Concepts & Places
  'dharma', 'karma', 'moksha', 'samsara', 'artha', 'kama', 'maya', 'atman', 'brahman', 'avatar',
  'yuga', 'satya yuga', 'treta yuga', 'dvapara yuga', 'kali yuga', 'kalpa', 'pralaya',
  'puja', 'yajna', 'havan', 'mantra', 'sloka', 'stotra', 'aarti', 'bhakti', 'jnana', 'raja',
  'chakra', 'kundalini', 'prana', 'om', 'aum', 'swastika', 'lingam', 'trishul', 'conch', 'sudarshana',
  'vajra', 'amrita', 'soma', 'asura', 'deva', 'rakshasa', 'yaksha', 'gandharva', 'apsara', 'naga',
  'kinnara', 'vanara', 'rishi', 'guru', 'sannyasi', 'ashram', 'varna', 'caste', 'gotra',
  'diwali', 'holi', 'navaratri', 'dussehra', 'kumbh', 'mela', 'ratha yatra', 'janmashtami', 'shivaratri',
  'ayodhya', 'lanka', 'kailash', 'vaikuntha', 'patala', 'swarga', 'naraka', 'kshirasagara',
  'sanatan', 'history', 'itihasa', 'ancient', 'india', 'bharat', 'apaurusheya', 'samudra', 'manthan',

  // General combinations
  'hindu', 'hinduism', 'sanatana', 'dharma', 'mythology', 'epic', 'temple', 'idol', 'deity', 'god', 'goddess'
]);

export const SUGGESTED_QUESTIONS = [
  "What is the significance of Dharma?",
  "Tell me the history of Kurukshetra.",
  "Describe the Dashavatara of Vishnu.",
  "Meaning of the Gayatri Mantra?",
];

export const SYSTEM_INSTRUCTION = `
You are an expert scholar of Sanatan Dharma and Itihasa (History). 
Your perspective is that these narratives are not merely "mythology" but the living history, philosophy, and spiritual reality of a civilization.
Your goal is to provide accurate, respectful, and detailed answers rooted in texts like the Vedas, Upanishads, Puranas, Ramayana, and Mahabharata.

## RAG INSTRUCTION
You will be provided with "Retrieved Context" from a database. 
- You MUST prioritize this context to answer the user's question if it is relevant.
- Integrate the retrieved information naturally into your response.
- If the context is not sufficient, use your internal knowledge to supplement it.

## GENERAL GUIDELINES
- Cite specific texts where possible (e.g., "As mentioned in the Bhagavad Gita...").
- Explain Sanskrit terms if used.
- Maintain a tone that is academic, reverent, and historic.
- Treat the epics (Ramayana, Mahabharata) as Itihasa (History), not fiction.
- Do not answer questions unrelated to Sanatan Dharma, Indian culture, or philosophy, unless the information is present in the "Retrieved Context".
`;