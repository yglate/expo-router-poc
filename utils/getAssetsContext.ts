/**
 * Helper to create a context for dynamically loading assets
 * Works with Metro bundler's require.context (requires unstable_allowRequireContext: true)
 */

export type AssetType = "icons" | "images";

export default function getAssetsContext(type: AssetType) {
  return type === "icons"
    ? // @ts-ignore - Metro bundler's require.context
      require.context("../assets/icons", false, /\.svg$/)
    : // @ts-ignore - Metro bundler's require.context
      require.context("../assets/images", false, /\.(png|jpg|jpeg|gif|webp)$/);
}
