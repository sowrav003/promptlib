import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
  return NextResponse.redirect(new URL('/prompts/new/upcoming', request.url))
}
 
 
export const config = {
  matcher: '/prompts/new',
}