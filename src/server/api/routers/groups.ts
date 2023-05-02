import {createTRPCRouter, protectedProcedure, publicProcedure} from "~/server/api/trpc";
import {syhApi} from "~/server/api/syhApi";
import type {IGroup} from "~/utils";

export const groupsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ctx}) => {
    // https://www.syhcomputacion.com/pedidosMovil/api/rest/v1.0/grupos/syncGrupos
    const response = await syhApi.post<IGroup>('grupos/syncGrupos',
      {
        "user_id": "3",
        "aplicacion_id": "17"
      }
  )
    return response.data
  })
})


