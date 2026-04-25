import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const dynamic = "force-static"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
  const logoData = await readFile(join(process.cwd(), "public/images/svdplogo.jpg"))
  const base64 = logoData.toString("base64")
  const src = `data:image/jpeg;base64,${base64}`

  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} width={180} height={180} style={{ borderRadius: "20px" }} alt="" />
    ),
    { ...size }
  )
}
