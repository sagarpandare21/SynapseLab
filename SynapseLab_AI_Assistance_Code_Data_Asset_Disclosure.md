# SynapseLab — AI Assistance, Code, Data & Asset Disclosure

**Project:** SynapseLab  
**Repository:** https://github.com/sagarpandare21/SynapseLab  
**Disclosure date:** 8 September 2026

## 1. AI assistance

AI assistance was used during the development and documentation of SynapseLab.

- **Tool used:** ChatGPT
- AI assistance was used for project planning, implementation guidance, code generation/refinement, debugging suggestions, documentation, and preparation of project submission materials.
- AI-generated suggestions were reviewed and adapted for the project before being included.
- The project author remains responsible for the final implementation, testing, presentation, and submission.

AI assistance did **not** represent an independent source of experimental results. The interactive model and its displayed behavior are implemented in the project code.

## 2. Code

SynapseLab is a web-based interactive demonstration implemented with **Next.js, React, and TypeScript**.

The repository contains:
- `app/` — application pages and UI
- `components/` — reusable interface components
- `model/` — the simplified memory model
- `public/` — static assets
- `package.json` / `package-lock.json` — project dependencies

The model includes a simplified Hebbian-learning mechanism. The implementation uses a learning rate and decay rate to strengthen active connections while allowing temporary synaptic strength to decay. The project also calculates memory strength and interference metrics.

## 3. Data

No external personal, confidential, or proprietary dataset is used by the interactive demonstration.

The experiment uses small, predefined example patterns embedded directly in the source code (for example, CAT, DOG, BIRD, and CAR represented as binary vectors). These are demonstration inputs rather than a collected research dataset.

No user-submitted personal data is required for the experiment.

## 4. External assets and libraries

The project uses standard open-source web-development dependencies, including:

- Next.js
- React
- React DOM
- Tailwind CSS/PostCSS tooling
- ESLint / Next.js ESLint configuration
- TypeScript type packages

The repository also contains standard starter/static SVG assets in `public/`. No external copyrighted dataset, paid asset pack, or proprietary research data was intentionally incorporated into the experiment.

## 5. Sources and attribution

The scientific/background concepts represented by the project are described in the project's supporting documentation and source records. Primary papers and other references used for the submission are listed separately in the project's Sources/Licenses record.

Where third-party libraries are used, their respective licenses remain applicable. This disclosure does not claim ownership of third-party libraries.

## 6. Human responsibility

The final project structure, selected demonstration concept, integration of the model with the interface, review of AI-assisted output, testing, documentation, and submission decisions are the responsibility of the project author.

## 7. Reproducibility

The project can be installed and run using the commands documented in `README.md`. The repository records the package dependencies needed to reproduce the web application.

---

**Declaration:** This disclosure is provided to make the use of AI assistance, source code, demonstration data, and external assets transparent for project evaluation.
