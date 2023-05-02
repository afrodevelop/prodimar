import {createTRPCRouter, protectedProcedure, publicProcedure} from "~/server/api/trpc";
import {syhApi} from "~/server/api/syhApi";
import type {ISubGroup} from "~/utils";

export const subGroupsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ctx}) => {
    // https://www.syhcomputacion.com/pedidosMovil/api/rest/v1.0/subgrupos/syncSubGrupos
    const response = await syhApi.post<ISubGroup>('subgrupos/syncSubGrupos',
      {
        "user_id": "3",
        "aplicacion_id": "17"
      }
    )
    return response.data
  })
})


