/dimensions/reputation.ts

```typescript
import { z } from 'zod';

export interface ReputationDimension {
  score: number;
  trustLevel: number;
  endorsements: Array<{
    from: string;
    score: number;
    timestamp: Date;
    comment?: string;
  }>;
  history: Array<{
    event: string;
    timestamp: Date;
    delta: number;
  }>;
  metadata: {
    category: string[];
    tags: string[];
    weight: number;
  };
}

export const ReputationDimensionSchema = z.object({
  score: z.number().min(0).max(1000),
  trustLevel: z.number().min(0).max(10),
  endorsements: z.array(z.object({
    from: z.string(),
    score: z.number().min(0).max(100),
    timestamp: z.date(),
    comment: z.string().optional()
  })),
  history: z.array(z.object({
    event: z.string(),
    timestamp: z.date(),
    delta: z.number()
  })),
  metadata: z.object({
    category: z.array(z.string()),
    tags: z.array(z.string()),
    weight: z.number()
  })
});

export class ReputationValidator {
  static validate(reputation: ReputationDimension): boolean {
    if (reputation.score < 0 || reputation.score > 1000) return false;
    if (reputation.trustLevel < 0 || reputation.trustLevel > 10) return false;
    if (reputation.metadata.weight < 0) return false;
    return true;
  }

  static calculateWeightedScore(reputation: ReputationDimension): number {
    const baseScore = reputation.score;
    const trustMultiplier = 1 + (reputation.trustLevel / 10);
    const endorsementBonus = reputation.endorsements.reduce((sum, e) => sum + e.score, 0) / 100;
    
    return baseScore * trustMultiplier + endorsementBonus;
  }
}
```
