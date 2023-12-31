import CustomH1 from "../../../components/custom/CustomH1";
import CustomP from "../../../components/custom/CustomP";
import CustomButton from "../../../components/custom/CustomButton";
import { LINK_USER_GOOGLE_PLAY, WEBSITE_URL } from "../../../common/constants";
import { home } from "../../../common/content";
import SloganContainer from "../../../components/SloganContainer";

export default function SloganUser() {
  const { topContainer } = home;
  const { title, paragraph, downloadButton, reservaButton, image } =
    topContainer;
  return (
    <SloganContainer orange>
      <section
        className="p-5
          pr-0
          md:p-10
          md:pr-0
          lg:p-14
          lg:pr-0
          xl:p-20u
          xl:pr-0
          2xl:p-26  
          2xl:pr-0
          flex items-center
        "
      >
        <div>
          <CustomH1 styles={"text-white mb-5"}>{title}</CustomH1>
          <CustomP styles={"text-slate-200 mb-8"}>{paragraph}</CustomP>
          <div className="lg:mb-9 xl:mb-10">
            <CustomButton
              isLink
              link={LINK_USER_GOOGLE_PLAY}
              styles={"mb-5"}
              white
            >
              {downloadButton} <i class="fa-brands fa-google-play ml-2"></i>
            </CustomButton>
          </div>
          <div className="hidden lg:block">
            <CustomButton isLink link={`${WEBSITE_URL}/app/reservar`} white>
              {reservaButton} <i class="fa-solid fa-globe ml-2"></i>
            </CustomButton>
          </div>
        </div>
      </section>
      <section className="flex justify-end items-end">
        <img
          className="
            h-52
            md:h-80
            lg:h-[25rem]
            xl:h-[30rem]
            2xl:h-[38rem]
            "
          src={image}
          alt="mockup"
        />
      </section>
    </SloganContainer>
  );
}
