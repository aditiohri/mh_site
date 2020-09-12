import React from "react";
import parse from "html-react-parser";
import GenericContentPage from "./GenericContentPage";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../utilities";

//see GenericContentPage.js for a longer comment about
//the (fairly strict) limitations these generic pages can contain
//
//Basically - they can receive a title as a prop and <p> tags as
//children and that's it
//
//For more complex content a custom component and new css will be needed

const staticText = {
  WhyPageTitle: enAndFrContent("Why does this exist?", "Why does this exist?"),
  WhyPageContent: enAndFrContent(
    `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
  tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in
  sollicitudin magna. Vivamus vel aliquet metus. Vestibulum justo arcu,
  pretium a vulputate eget, dapibus vitae risus. Sed imperdiet erat a
  fringilla aliquam. Etiam at accumsan tortor. Donec nulla diam, molestie
  nec sollicitudin eget, eleifend nec libero.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
  tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in
  sollicitudin magna. Vivamus vel aliquet metus. Vestibulum justo arcu,
  pretium a vulputate eget, dapibus vitae risus. Sed imperdiet erat a
  fringilla aliquam. Etiam at accumsan tortor. Donec nulla diam, molestie
  nec sollicitudin eget, eleifend nec libero.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
  tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in
  sollicitudin magna. Vivamus vel aliquet metus. Vestibulum justo arcu,
  pretium a vulputate eget, dapibus vitae risus. Sed imperdiet erat a
  fringilla aliquam. Etiam at accumsan tortor. Donec nulla diam, molestie
  nec sollicitudin eget, eleifend nec libero.
</p>`,
    `<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in
sollicitudin magna. Vivamus vel aliquet metus. Vestibulum justo arcu,
pretium a vulputate eget, dapibus vitae risus. Sed imperdiet erat a
fringilla aliquam. Etiam at accumsan tortor. Donec nulla diam, molestie
nec sollicitudin eget, eleifend nec libero.
</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in
sollicitudin magna. Vivamus vel aliquet metus. Vestibulum justo arcu,
pretium a vulputate eget, dapibus vitae risus. Sed imperdiet erat a
fringilla aliquam. Etiam at accumsan tortor. Donec nulla diam, molestie
nec sollicitudin eget, eleifend nec libero.
</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in
sollicitudin magna. Vivamus vel aliquet metus. Vestibulum justo arcu,
pretium a vulputate eget, dapibus vitae risus. Sed imperdiet erat a
fringilla aliquam. Etiam at accumsan tortor. Donec nulla diam, molestie
nec sollicitudin eget, eleifend nec libero.
</p>`
  ),
};

const WhyPage = ({ match }) => {
  const lang = match.params.lang || "fr";
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <GenericContentPage title={fillText(staticText.WhyPageTitle)}>
      {parse(fillText(staticText.WhyPageContent))}{" "}
    </GenericContentPage>
  );
};

export default WhyPage;
