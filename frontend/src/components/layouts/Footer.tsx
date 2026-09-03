// src/components/layout/Footer.tsx

export default function Footer() {
  const footerLinks = [
    "Về chúng tôi",
    "Trợ giúp",
    "Điều khoản",
    "Quyền riêng tư"
  ];

  return (
    <footer
      className="
        w-full
        py-stack-md
        px-container-margin
        bg-surface-container-highest
        flex
        flex-col
        md:flex-row
        justify-between
        items-start
        gap-gutter
      "
    >
      {/* Brand + Copyright */}
      <div className="flex flex-col gap-2">
        <div
          className="
            font-headline-md
            text-headline-md
            font-bold
            text-primary
          "
        >
          Edu3D
        </div>

        <p
          className="
            font-body-md
            text-body-md
            text-on-surface-variant
          "
        >
          © 2026 Edu3D. All rights reserved.
        </p>
      </div>

      {/* Links */}
      <div
        className="
          flex
          flex-wrap
          gap-x-6
          gap-y-2
          mt-4
          md:mt-0
          font-label-sm
          text-label-sm
        "
      >
        {footerLinks.map((link) => (
          <button
            key={link}
            type="button"
            className="
              text-on-surface-variant
              hover:text-secondary
              underline
              transition-all
              opacity-80
              hover:opacity-100
              cursor-pointer
            "
          >
            {link}
          </button>
        ))}
      </div>
    </footer>
  );
}