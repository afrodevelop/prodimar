import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";
import {syhApi} from "~/server/api/syhApi";
import {IProduct} from "~/utils";

export const productsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ctx}) => {
    // https://www.syhcomputacion.com/pedidosMovil/api/rest/v1.0/articulos/syncProductos
    const response = await syhApi.post<IProduct>('articulos/syncProductos',
      {
        "user_id": "3",
        "aplicacion_id": "17"
      }
    )
    return response.data
  })
})