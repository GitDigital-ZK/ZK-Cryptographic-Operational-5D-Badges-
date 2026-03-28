<a href='https://ko-fi.com/T6T61WAZYZ' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>


https://ko-fi.com/gitdigitalzeroknowledge

Folder Tree

```
ZK-Cryptographic-Operational-5D-Badges/
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
├── VERSION
├── config/
│   ├── circuit.config.json
│   ├── networks.json
│   └── operationalBadge.config.json
├── contracts/
│   ├── OperationalBadge.sol
│   ├── OperationalBadgeMetadata.sol
│   ├── OperationalBadgeRegistry.sol
│   ├── OperationalBadgeVerifier.sol
│   └── interfaces/
│       ├── IOperationalBadge.sol
│       └── IOperationalBadgeRegistry.sol
├── docs/
│   ├── 5d-metadata.md
│   ├── api-reference.md
│   ├── architecture.md
│   ├── contract-reference.md
│   ├── governance.md
│   ├── operational-badge-model.md
│   └── zk-proofs.md
├── examples/
│   ├── batch-issue-operational-badges.ts
│   ├── issue-operational-badge.ts
│   ├── operational-badge-dashboard.html
│   └── verify-operational-badge.ts
├── package.json
├── scripts/
│   ├── build-circuits.sh
│   ├── compile-contracts.sh
│   ├── deploy-contracts.ts
│   └── generate-operational-badge.ts
├── sdk/
│   ├── client.ts
│   ├── errors.ts
│   ├── index.ts
│   ├── operationalBadgeBuilder.ts
│   ├── operationalBadgeClient.ts
│   ├── operationalBadgeVerifier.ts
│   └── types.ts
├── src/
│   ├── circuits/
│   │   ├── operational.circom
│   │   ├── operational.wasm
│   │   ├── operational.zkey
│   │   └── verification_key.json
│   ├── dimensions/
│   │   ├── identity.ts
│   │   ├── proof.ts
│   │   ├── reputation.ts
│   │   ├── spatial.ts
│   │   └── temporal.ts
│   ├── operationalBadgeDecoder.ts
│   ├── operationalBadgeEncoder.ts
│   ├── operationalBadgeEngine.ts
│   ├── operationalBadgeRegistry.ts
│   ├── operationalBadgeSchemas.ts
│   ├── operationalBadgeTypes.ts
│   └── operationalBadgeValidator.ts
├── tests/
│   ├── operationalBadgeContracts.test.ts
│   ├── operationalBadgeEngine.test.ts
│   ├── operationalBadgeProofs.test.ts
│   ├── operationalBadgeRegistry.test.ts
│   └── sdk/
│       └── operationalBadgeClient.test.ts
├── tsconfig.json
└── api/
    ├── routes/
    │   ├── getOperationalBadge.ts
    │   ├── issueOperationalBadge.ts
    │   ├── listOperationalBadges.ts
    │   └── verifyOperationalBadge.ts
    └── schema/
        └── operationalBadge.graphql
```

Download Repository

Download ZIP

File Contents

Root Files

README.md

```markdown
# ZK-Cryptographic-Operational-5D-Badges

A zero-knowledge proof system for issuing and verifying operational badges across five dimensions: Identity, Spatial, Temporal, Proof, and Reputation.

## Overview

This repository provides a complete framework for creating, managing, and verifying cryptographic badges that represent operational capabilities and achievements. Using zero-knowledge proofs, badge holders can prove their qualifications without revealing underlying sensitive data.

## Key Features

- **5-Dimensional Badge Model**: Combines Identity, Spatial, Temporal, Proof, and Reputation dimensions
- **Zero-Knowledge Proofs**: Verify badge validity without exposing private data
- **Smart Contract Integration**: On-chain verification and registry
- **TypeScript SDK**: Easy integration into applications
- **GraphQL API**: Flexible querying and verification endpoints

## Quick Start

```bash
npm install
npm run build
npm test
```

Documentation

· Architecture
· Badge Model
· API Reference
· Smart Contracts

License

MIT

```

# ZK-Cryptographic-Operational-5D-Badges
## These badges represent system-level capabilities.

Examples
- ops.developer  
- ops.contributor  
- ops.integrator  
- ops.maintainer  
- ops.tester  
- ops.automation  

Purpose
These badges are used for:
- repo access  
- CI/CD permissions  
- automation triggers  
- workflow approvals  

They pair with your GitDigital ecosystem and your automation workflows.
