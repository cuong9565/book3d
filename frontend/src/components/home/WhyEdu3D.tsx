import {
  Box,
  Hand,
  Volume2,
} from "lucide-react";

const features = [
  {
    icon: Box,
    title: "Khám phá ở chế độ 3D",
    description: "Xoay, phóng to và phân tích chi tiết các mô hình 3D ngay bên cạnh văn bản để hình dung các khái niệm trừu tượng.",
    iconClass: "bg-primary-container/10 text-primary",
  },
  {
    icon: Hand,
    title: "Đọc tương tác",
    description: "Tương tác với các bài kiểm tra, thuật ngữ kỹ thuật được làm nổi bật và các cửa sổ bật lên theo ngữ cảnh, được điều chỉnh phù hợp với tốc độ học tập của bạn.",
    iconClass: "bg-secondary-container/20 text-secondary",
  },
  {
    icon: Volume2,
    title: "Học qua âm thanh",
    description: "Hãy lắng nghe phần thuyết minh chuyên nghiệp và các hiệu ứng âm thanh không gian giúp tăng cường trải nghiệm nhập vai trong mỗi học phần.",
    iconClass: "bg-tertiary-container/10 text-tertiary",
  },
];

export default function WhyEdu3D() {
  return (
    <section className="w-full max-w-7xl mx-auto px-container-margin py-stack-md p-4">

      {/* Heading */}
      <div className="text-center mb-stack-lg max-w-2xl mx-auto">

        <h2 className="font-headline-lg font-bold text-3xl lg:text-headline-lg text-on-surface mb-2">
          Tại sao sử dụng Edu3D?
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Một cách tiếp cận mang tính cách mạng để hiểu các chủ đề phức tạp thông qua học tập không gian, đắm chìm.
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="
                bg-surface
                rounded-2xl
                p-6
                shadow-[0px_4px_20px_rgba(15,23,42,0.05)]
                border
                border-outline-variant/20
                flex
                flex-col
                gap-4
                group
                hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)]
                transition-all
                duration-300
              "
            >

              <div
                className={`
                  w-12
                  h-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  mb-2
                  group-hover:scale-110
                  transition-transform
                  ${feature.iconClass}
                `}
              >
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="font-headline-md text-headline-md text-on-surface">
                {feature.title}
              </h3>

              <p className="font-body-md text-body-md text-on-surface-variant">
                {feature.description}
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
}