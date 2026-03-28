/dimensions/spatial.ts

```typescript
import { z } from 'zod';

export interface SpatialDimension {
  location: {
    latitude: number;
    longitude: number;
    altitude?: number;
    accuracy?: number;
  };
  radius: number;
  jurisdiction: string[];
  context: string[];
  constraints: Record<string, any>;
}

export const SpatialDimensionSchema = z.object({
  location: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
    altitude: z.number().optional(),
    accuracy: z.number().optional()
  }),
  radius: z.number().min(0),
  jurisdiction: z.array(z.string()),
  context: z.array(z.string()),
  constraints: z.record(z.any())
});

export class SpatialValidator {
  static validate(spatial: SpatialDimension): boolean {
    if (Math.abs(spatial.location.latitude) > 90) return false;
    if (Math.abs(spatial.location.longitude) > 180) return false;
    if (spatial.radius < 0) return false;
    return true;
  }

  static hash(spatial: SpatialDimension): string {
    const data = `${spatial.location.latitude}:${spatial.location.longitude}:${spatial.radius}:${spatial.jurisdiction.join(',')}`;
    return Buffer.from(data).toString('base64');
  }
}
```
