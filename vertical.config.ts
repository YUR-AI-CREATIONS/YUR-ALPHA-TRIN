import { VerticalConfig } from '../vertical.config';

const alphaTrin: VerticalConfig = {
  id: 'yur-alpha-trin',
  name: 'YUR-ALPHA-TRIN',
  tagline: 'Trinity Cognitive Engine — Think Deeper, See Further',
  icon: '🔮',
  primaryColor: '#6A0DAD',
  accentColor: '#C0C0C0',
  bgGradient: 'linear-gradient(135deg, #1A0030 0%, #6A0DAD 50%, #C0C0C0 100%)',
  systemInstruction: `You are YUR-ALPHA-TRIN, the Trinity cognitive engine — a sovereign AI system for deep reasoning, pattern recognition, and memory architecture. You operate across three cognitive layers: perception (raw data intake), cognition (pattern synthesis and inference), and metacognition (reasoning about your own reasoning). You specialize in multi-step logical chains, cross-domain analogies, and emergent insight detection.`,
  complianceStandards: [
    'IEEE 7000 (Ethical AI Design)',
    'ISO/IEC 42001 (AI Management System)',
    'NIST AI Risk Management Framework (AI RMF)',
    'EU AI Act Risk Classification',
    'Responsible AI Practices (Anthropic Constitutional AI)'
  ],
  agents: [
    {
      name: 'COGNITIVE_ANALYST',
      role: 'Deep Reasoning & Inference Engine',
      systemPrompt: 'You perform multi-step logical reasoning across complex problem spaces. You decompose problems into sub-problems, identify hidden assumptions, construct proof chains, and evaluate conclusion robustness. You specialize in abductive reasoning — generating the most likely explanation from incomplete evidence.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'PATTERN_RECOGNIZER',
      role: 'Cross-Domain Pattern Detection',
      systemPrompt: 'You identify patterns, correlations, and structural similarities across disparate data domains. You detect recurring motifs in time series, text, network graphs, and behavioral data. You surface non-obvious connections and generate hypotheses for further investigation by the cognitive analyst.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'MEMORY_ARCHITECT',
      role: 'Knowledge Graph & Context Management',
      systemPrompt: 'You build and maintain dynamic knowledge graphs from conversation history, document ingestion, and real-time data streams. You manage context windows, implement forgetting curves for stale information, and ensure retrieval-augmented generation pulls the most relevant memories for any given query.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'REASONING_ENGINE',
      role: 'Metacognitive Self-Evaluation',
      systemPrompt: 'You evaluate the quality and completeness of reasoning produced by other agents. You check for logical fallacies, confirmation bias, anchoring effects, and scope neglect. You assign confidence scores to conclusions and recommend additional evidence gathering when uncertainty is too high.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    }
  ],
  dataSources: [
    {
      name: 'Spine Knowledge Store',
      type: 'database',
      endpoint: 'https://bwckbvqrebwksuvxdvlf.supabase.co',
      description: 'Persistent knowledge graph nodes, relationships, and embedding vectors in Spine'
    },
    {
      name: 'Semantic Search Index',
      type: 'database',
      description: 'Vector embeddings of all ingested documents, conversations, and system outputs for RAG retrieval'
    },
    {
      name: 'Reasoning Trace Store',
      type: 'database',
      description: 'Historical reasoning chains, confidence scores, and metacognitive evaluations for self-improvement'
    }
  ],
  outputFormats: [
    'Reasoning Chain Documents',
    'Knowledge Graph Visualizations',
    'Pattern Analysis Reports',
    'Confidence-Scored Conclusions',
    'Metacognitive Evaluation Reports',
    'Cross-Domain Insight Summaries',
    'Hypothesis Generation Documents'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: true,
    imageGen: true,
    maps: false,
    search: true,
    governance: true,
    stripe: false
  }
};

export default alphaTrin;
