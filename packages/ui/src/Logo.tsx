// OpenGrid 品牌字标（共享组件，Nav / 页脚 / Hero / 论坛可复用）。
// 「技术 / 赛道风」：系统单宽字体（无需加载字体）+ 可选细点阵背景，
// 呼应品牌名里的 "Grid"（发车周格 / 赛道网格）。
// 品牌字跨中英一致，故默认硬编码 "OpenGrid"（不属于本地化文案），
// 需要时可用 label 覆盖。配色全走纯黑体系的 --page-* 变量。

interface LogoProps {
  /** 品牌字，默认 "OpenGrid"（camelCase 会自动拆成 Open / Grid 两段配色） */
  label?: string;
  /** 是否渲染赛道风细点阵背景（首页 Hero 用；Nav / 页脚一般不用） */
  withGrid?: boolean;
  /** 文字尺寸等排版类；不传则用较小的默认尺寸（适合 Nav） */
  className?: string;
}

export function Logo({
  label = "OpenGrid",
  withGrid = false,
  className = "",
}: LogoProps) {
  // 品牌以 "OpenGrid" 开头时：拆成 Open（稍暗）+ Grid（高亮）两色字标，
  // 凸显 "Grid"（周格/赛道）概念；其后若带描述（如 " 社区"/" Community"）
  // 作为淡色后缀跟随。非品牌 label 则整体高亮显示。
  const BRAND = "OpenGrid";
  const startsWithBrand = label.startsWith(BRAND);
  const parts = startsWithBrand
    ? { head: "Open", tail: "Grid", suffix: label.slice(BRAND.length) }
    : { head: "", tail: label, suffix: "" };

  return (
    <span className={`relative inline-flex items-center ${className}`}>
      {withGrid && (
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[220%] w-[160%] -translate-x-1/2 -translate-y-1/2"
          style={{
            // 细点阵：用前景色画 1px 圆点，间距 16px；径向遮罩让四周自然淡出
            backgroundImage:
              "radial-gradient(var(--page-fg) 1px, transparent 1.4px)",
            backgroundSize: "16px 16px",
            opacity: 0.14,
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 60% at center, #000 0%, transparent 75%)",
            maskImage:
              "radial-gradient(ellipse 55% 60% at center, #000 0%, transparent 75%)",
          }}
        />
      )}
      <span className="relative z-10 font-mono font-semibold tracking-tight text-[var(--page-fg)]">
        {parts.head && (
          <span className="text-[var(--page-fg-soft)]">{parts.head}</span>
        )}
        {parts.tail}
        {parts.suffix && (
          <span className="font-normal text-[var(--page-fg-soft)]">
            {parts.suffix}
          </span>
        )}
      </span>
    </span>
  );
}
