import React from "react";
import "../stylesheets/Team.css";

export default function Team() {
  return (
    <section className="slice-lg sct-color-4" id="team">
      <div className="section-title section-title--style-1 text-center mb-2">
        <h3 className="section-title-inner " style={{ color: "white" }}>
          <span>L'Equipe</span>
        </h3>
        <span className="section-title-delimiter clearfix d-none"></span>
      </div>
      <span className="clearfix"></span>
      <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
        <p className="text-lg line-height-1_8" style={{ color: "#b7c1c8" }}>
          Notre équipe issue de la diversité met l'excellence et l'humain au
          coeur du parcours de l'alternant grâce au numérique.
        </p>
      </div>
      <span className="space-xs-xl"></span>
      <div
        className="row cols-xs-space cols-sm-space cols-md-space"
        style={{ justifyContent: "center;" }}
      >
        <div className="col-lg-4">
          <div className="block block--style-4">
            <div className="block block-image">
              <div id="essai">
                <img
                  src="images/tatijana5.png"
                  className="block-icon circle imageo"
                  alt="photo Tatijana"
                />
                <a href="https://www.linkedin.com/in/tatijana-rajcic-692389139">
                  <img
                    src="images/linkedin_img.png"
                    className="middle"
                    alt="icone Linkedin"
                  />
                </a>
              </div>
            </div>
            <div className="block-body" style={{ textAlign: "center" }}>
              <h3
                className="heading heading-5 strong-500"
                style={{ color: "white" }}
              >
                Tatijana Rajcic
              </h3>
              <h4 className="heading heading-xs strong-400 text-uppercase letter-spacing-2 c-gray-light">
                Contributrice créative & Développeuse
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="block block--style-4">
            <div className="block block-image">
              <div id="essai">
                <img
                  src="images/bianca3.png"
                  className="block-icon circle imageo"
                  alt="photo Bianca"
                />
                <a href="https://www.linkedin.com/in/bianca-schor-443a10102">
                  <img
                    src="images/linkedin_img.png"
                    className="middle"
                    alt="icone Linkedin"
                  />
                </a>
              </div>
            </div>
            <div className="block-body" style={{ textAlign: "center" }}>
              <h3
                className="heading heading-5 strong-500"
                style={{ color: "white" }}
              >
                Bianca Schor
              </h3>
              <h4 className="heading heading-xs strong-400 text-uppercase letter-spacing-2 c-gray-light">
                Fondatrice et entrepreneuse engagée
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="block block--style-4">
            <div className="block block-image">
              <div id="essai">
                <img
                  src="images/loic.png"
                  className="block-icon circle imageo"
                  alt="photo Loïc"
                />
                <a href="https://www.linkedin.com/in/loic-veillard">
                  <img
                    src="images/linkedin_img.png"
                    className="middle"
                    alt="icone Linkedin"
                  />
                </a>
              </div>
            </div>
            <div className="block-body" style={{ textAlign: "center" }}>
              <h3
                className="heading heading-5 strong-500"
                style={{ color: "white" }}
              >
                Loïc Veillard
              </h3>
              <h4 className="heading heading-xs strong-400 text-uppercase letter-spacing-2 c-gray-light">
                Product Manager
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
