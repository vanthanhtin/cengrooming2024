import React, { useEffect } from "react";
import symbol1 from "../img/teacher.png";
import symbol2 from "../img/poodle.png";
import symbol3 from "../img/certificate.png";
import intro from "../img/intro.png";
import Aos from "aos";
import "aos/dist/aos";
import { Subtitle, Title, TitleBig, TitleSmall } from "../Styled";

const IntroTeacher = () => {
    useEffect(() => {
        Aos.init();
    });
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div data-aos-duration="600" className="lg:max-w-lg">
                            <Subtitle data-aos="fade-right">PROFILE MASTER</Subtitle>
                            <TitleBig data-aos="fade-right" data-aos-delay="100">Dương Cẩm Tiên</TitleBig>
                            <Title data-aos="fade-right" data-aos-delay="200" className="mt-6">
                                Hiệu trưởng của Học viện cũng chính là thành
                                viên, lãnh đạo quốc gia của IGA Việt Nam. Chương
                                trình đào tạo chuẩn quốc tế là điểm đầu tiên
                                cuốn hút học viên lựa chọn. Theo đó, chương
                                trình đào tạo vừa có tính hiện đại vượt bậc nhờ
                                tiếp thu từ nền giáo dục phương Tây vừa kế thừa
                                giá trị của môi trường Việt Nam. Học viện luôn
                                được cập nhật các chương trình học tập, cải cách
                                mới nhất. Giáo trình đưa vào giảng dạy được các
                                giáo viên hàng đầu thế giới soạn thảo.
                            </Title>
                            <dl data-aos="fade-right" data-aos-delay="300" className="mt-10 max-w-xl space-y-4 text-base leading-7 text-nau lg:max-w-none">
                                <div className="relative pl-9 flex">
                                    <img
                                        src={symbol1}
                                        className="w-7 h-7 mt-[10px] leading-3 mr-3"
                                    />
                                    <TitleSmall>
                                        Với nhiều kinh nghiệm trong lĩnh vực đào
                                        tạo grooming tại các trường nổi tiếng
                                        Quốc tế.
                                    </TitleSmall>
                                </div>
                                <div className="relative pl-9 flex">
                                    <img
                                        src={symbol2}
                                        className="w-7 h-7 mt-[10px] leading-3 mr-3"
                                    />
                                    <TitleSmall>
                                        Đảm bảo 90% các tiết học thực hành trên
                                        cún thật trong khi học và chỉnh sửa bài
                                        tập hàng ngày giúp các bạn học viên nâng
                                        cao tay nghề.
                                    </TitleSmall>
                                </div>
                                <div className="relative pl-9 flex">
                                    <img
                                        src={symbol3}
                                        className="w-7 h-7 mt-[10px] leading-3 mr-3"
                                    />
                                    <TitleSmall>
                                        Được chứng nhận bởi CenGrooming VietNam
                                        sau khi hoàn thành bài tốt nghiệp.
                                    </TitleSmall>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <img
                        src={intro}
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[60rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                        data-aos="fade-left"
                    />
                </div>
            </div>
        </div>
    );
};

export default IntroTeacher;
