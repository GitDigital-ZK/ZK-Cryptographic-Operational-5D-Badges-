Source Files (/src)

/dimensions/identity.ts

```typescript
import { z } from 'zod';

export interface IdentityDimension {
  entityId: string;
  entityType: 'individual' | 'organization' | 'device' | 'service';
  publicKey: string;
  credentials: string[];
  verificationLevel: number;
  metadata: Record<string, any>;
}

export const IdentityDimensionSchema = z.object({
  entityId: z.string(),
  entityType: z.enum(['individual', 'organization', 'device', 'service']),
  publicKey: z.string(),
  credentials: z.array(z.string()),
  verificationLevel: z.number().min(0).max(10),
  metadata: z.record(z.any())
});

export class IdentityValidator {
  static validate(identity: IdentityDimension): boolean {
    if (!identity.entityId || identity.entityId.length === 0) return false;
    if (!identity.publicKey.match(/^0x[a-fA-F0-9]{40}$/)) return false;
    if (identity.verificationLevel < 0 || identity.verificationLevel > 10) return false;
    return true;
  }

  static hash(identity: IdentityDimension): string {
    const data = `${identity.entityId}:${identity.entityType}:${identity.publicKey}:${identity.verificationLevel}`;
    // In production, use a proper cryptographic hash
    return Buffer.from(data).toString('base64');
  }
}
```
