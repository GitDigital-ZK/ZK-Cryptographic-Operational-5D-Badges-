/proofs/operationalStateProof.ts

```typescript
import { IdentityDimension } from '../dimensions/identity';
import { SpatialDimension } from '../dimensions/spatial';
import { TemporalDimension } from '../dimensions/temporal';
import { ProofDimension } from '../dimensions/proof';
import { ReputationDimension } from '../dimensions/reputation';

export interface OperationalStateProof {
  identity: IdentityDimension;
  spatial: SpatialDimension;
  temporal: TemporalDimension;
  reputation: ReputationDimension;
  proof: ProofDimension;
  metadata: {
    version: string;
    timestamp: Date;
    badgeId: string;
  };
}

export class OperationalStateProofGenerator {
  static async generate(params: {
    identity: IdentityDimension;
    spatial: SpatialDimension;
    temporal: TemporalDimension;
    reputation: ReputationDimension;
  }): Promise<OperationalStateProof> {
    // Generate zero-knowledge proof for operational state
    const proofData = await this.generateZKProof(params);
    
    return {
      ...params,
      proof: proofData,
      metadata: {
        version: '1.0.0',
        timestamp: new Date(),
        badgeId: this.generateBadgeId(params)
      }
    };
  }

  private static async generateZKProof(params: any): Promise<ProofDimension> {
    // Implementation would use snarkjs to generate actual ZK proof
    // This is a simplified version
    return {
      proofType: 'zk',
      proofData: Buffer.from(JSON.stringify(params)).toString('base64'),
      verificationKey: '0x1234567890abcdef1234567890abcdef12345678',
      prover: '0x' + 'a'.repeat(40),
      timestamp: new Date(),
      metadata: {
        circuit: 'operational_state',
        publicInputs: Object.keys(params),
        privateInputs: []
      }
    };
  }

  private static generateBadgeId(params: any): string {
    const data = `${params.identity.entityId}:${params.spatial.location.latitude}:${params.temporal.validFrom}`;
    return Buffer.from(data).toString('base64').substring(0, 32);
  }
}
```
