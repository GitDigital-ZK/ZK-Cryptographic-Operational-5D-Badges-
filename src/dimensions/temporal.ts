/dimensions/temporal.ts

```typescript
import { z } from 'zod';

export interface TemporalDimension {
  validFrom: Date;
  validTo: Date;
  timezone: string;
  recurrence?: {
    pattern: 'daily' | 'weekly' | 'monthly' | 'yearly';
    interval: number;
    until?: Date;
  };
  constraints: {
    maxDuration?: number;
    minDuration?: number;
    timeRestrictions?: Array<{ start: string; end: string }>;
  };
}

export const TemporalDimensionSchema = z.object({
  validFrom: z.date(),
  validTo: z.date(),
  timezone: z.string(),
  recurrence: z.object({
    pattern: z.enum(['daily', 'weekly', 'monthly', 'yearly']),
    interval: z.number(),
    until: z.date().optional()
  }).optional(),
  constraints: z.object({
    maxDuration: z.number().optional(),
    minDuration: z.number().optional(),
    timeRestrictions: z.array(z.object({
      start: z.string(),
      end: z.string()
    })).optional()
  })
});

export class TemporalValidator {
  static validate(temporal: TemporalDimension): boolean {
    if (temporal.validFrom >= temporal.validTo) return false;
    if (temporal.constraints.minDuration && temporal.constraints.maxDuration) {
      if (temporal.constraints.minDuration > temporal.constraints.maxDuration) return false;
    }
    return true;
  }

  static isActive(temporal: TemporalDimension, now: Date = new Date()): boolean {
    return now >= temporal.validFrom && now <= temporal.validTo;
  }
}
```
