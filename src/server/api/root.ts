import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import {groupsRouter} from "~/server/api/routers/groups";
import {subGroupsRouter} from "~/server/api/routers/subGroups";
import {productsRouter} from "~/server/api/routers/products";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  group: groupsRouter,
  subGroup: subGroupsRouter,
  products: productsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
