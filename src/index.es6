import isContext from './is-context'
export default function forceCanvasContext (ctx, type='2d') {

  // convert canvas to ctx
  if (ctx.tagName === 'CANVAS') {
    ctx = ctx.getContext(type)
  }

  // error if not ctx
  if (!isContext(ctx)) throw Error('Could not force context')

  return ctx
}
