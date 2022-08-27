import { useState } from "react";
import Select from "react-select";
import "./App.css";
import HeaderCalculator from "./HeaderCalculator";

import Kategori1 from "./Kategori1";
import Kategori2 from "./Kategori2";
import Kategori3 from "./Kategori3";
import Kategori4 from "./Kategori4";
import Kategori5 from "./Kategori5";
import Kategori6 from "./Kategori6";
import Kategori7 from "./Kategori7";
import Kategori8a from "./Kategori8a";
import Kategori8b from "./Kategori8b";
import Kategori9 from "./Kategori9";
import Kategori10 from "./Kategori10";
import Kategori11a from "./Kategori11a";
import Kategori11b from "./Kategori11b";
import Kategori12a from "./Kategori12a";
import Kategori12b from "./Kategori12b";
import Kategori13a from "./Kategori13a";
import Kategori13b from "./Kategori13b";
import Kategori14a from "./Kategori14a";
import Kategori14b from "./Kategori14b";
import Kategori15a from "./Kategori15a";
import Kategori15b from "./Kategori15b";
import Kategori16 from "./Kategori16";
import Kategori17 from "./Kategori17";
import Kategori18 from "./Kategori18";
import Kategori19 from "./Kategori19";
import Kategori20 from "./Kategori20";
import Kategori21 from "./Kategori21";
import Kategori22 from "./Kategori22";
import Kategori22a from "./Kategori22a";
import Kategori22b from "./Kategori22b";
import Kategori22c from "./Kategori22c";
import Kategori22d from "./Kategori22d";
import Kategori23 from "./Kategori23";
import Kategori24 from "./Kategori24";
import Kategori24a from "./Kategori24a";
import Kategori24b from "./Kategori24b";
import Kategori24c from "./Kategori24c";
import Kategori25 from "./Kategori25";
import Kategori25a from "./Kategori25a";
import Kategori25b from "./Kategori25b";
import Kategori26 from "./Kategori26";
import Kategori27 from "./Kategori27";
import Kategori28 from "./Kategori28";
import Kategori29 from "./Kategori29";
import Kategori30 from "./Kategori30";
import Kategori31 from "./Kategori31";
import Kategori32 from "./Kategori32";

const Calculator = () => {
  //matvaregruppe selector
  const selectOption = [
    {
      value: "grønnsaker, frukt, bær og nøtter",
      label: "Grønnsaker, frukt, bær og nøtter",
    },
    {
      value: "mel, gryn og ris",
      label: "Mel, gryn og ris",
    },
    { value: "grøt, brød og pasta", label: "Grøt, brød og pasta" },
    {
      value: "melk, syrnede melkeprodukter og vegetabilske alternativer",
      label: "Melk, syrnede melkeprodukter og vegetabilske alternativer",
    },

    {
      value: "ost og vegetabilske alternativer",
      label: "Ost og vegetabilske alternativer",
    },
    {
      value: "matfett og oljer",
      label: "Matfett og oljer",
    },
    {
      value: "fiskerivarer og produkter av fiskerivarer",
      label: "Fiskerivarer og produkter av fiskerivarer",
    },
    {
      value: "kjøtt og produkter som inneholder kjøtt",
      label: "Kjøtt og produkter som inneholder kjøtt",
    },
    {
      value: "helt eller delvis vegetabilske produkter",
      label: "Helt eller delvis vegetabilske produkter",
    },
    {
      value: "ferdigretter",
      label: "Ferdigretter",
    },
    {
      value: "dressinger og sauser",
      label: "Dressinger og sauser",
    },
  ];

  //matkategori selector
  const selectGrønnsaker = [
    {
      value: "kategori 1",
      label:
        "1. Grønnsaker, rotfrukter, belgvekster (unntatt peanøtter) og poteter. Produktene kan være foredlet. Uforedlede krydderurter omfattes også.",
    },
    {
      value: "kategori 2",
      label:
        "2. Frukt og bær som er uforedlet. Produktene kan likevel være varmebehandlet.",
    },
    {
      value: "kategori 3",
      label:
        "3. Nøtter og peanøtter som er uforedlet. Produktene kan likevel være varmebehandlet.",
    },
  ];

  const selectMel = [
    {
      value: "kategori 4",
      label:
        "4. Mel, gryn og flak av korn som inneholder 100 % fullkorn av korndelens tørrstoffinnhold. Kli og kim er unntatt fra kravet til fullkorn. Fullkornet kan helt eller delvis erstattes med grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter) og rotfrukter for samme anvendelsesområde.",
    },
    {
      value: "kategori 5",
      label:
        "5. Ris som inneholder 100 % fullkorn av produktets tørrstoffinnhold.",
    },
    {
      value: "kategori 6",
      label:
        "6. Kornblandinger og frokostblandinger som inneholder minst 55 % fullkorn av produktets tørrstoffinnhold. Inneholder produktet grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter) eller rotfrukter, medregnes ikke den andelen av produktet som utgjøres av disse ved beregningen av fullkornsmengden. Glutenfrie kornblandinger og frokostkorn skal inneholde minst 20 % fullkorn av produktets tørrstoffinnhold.",
    },
  ];

  const selectGrøt = [
    {
      value: "kategori 7",
      label:
        "7. Grøt og grøtpulver (tilberedt ifølge produsentens anvisning) som inneholder minst 55 % fullkorn av produktets tørrstoffinnhold.Inneholder produktet grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter) eller rotfrukter, medregnes ikke den andelen av produktet som utgjøres av disse, ved beregningen av fullkornsmengden. Vilkårene gjelder for det spiseklare produktet.",
    },
    {
      value: "kategori 8a",
      label:
        "8. a) Brød og brødmikser hvor bare væske og eventuelt gjær skal tilsettes, og som inneholder minst 30 % fullkorn av produktets tørrstoffinnhold. Inneholder produktet grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter) eller rotfrukter, medregnes ikke den andelen av produktet som utgjøres av disse, ved beregningen av fullkornsmengden. Produkter i gruppe 8 b) omfattes ikke. Glutenfrie brød og brødmikser skal inneholde minst 10 % fullkorn av produktets tørrstoffinnhold. Vilkårene gjelder for det spiseklare produktet.",
    },
    {
      value: "kategori 8b",
      label:
        "8. b) Rugbrød og andre rugbaserte produkter samt brødmikser hvor bare væske og eventuelt gjær skal tilsettes, som inneholder minst 35 % fullkorn av produktets tørrstoffinnhold. I produktene skal minst 30 % av kornsortene være rug.Inneholder produktet grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter) eller rotfrukter, medregnes ikke den andelen av produktet som utgjøres av disse, ved beregningen av fullkornsmengden. Vilkårene gjelder for det spiseklare produktet.",
    },
    {
      value: "kategori 9",
      label:
        "9. Knekkebrød, skonroker og melmikser til slike produkter, hvor bare væske og eventuelt gjær skal tilsettes. Produktet skal inneholde minst 50 % fullkorn av produktets tørrstoffinnhold. Inneholder produktet grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter) eller rotfrukter, medregnes ikke den andelen av produktet som utgjøres av disse, ved beregningen av fullkornsmengden. Tilsvarende glutenfrie produkter skal inneholde minst 15 % fullkorn av produktets tørrstoffinnhold. Vilkårene gjelder for det spiseklare produktet.",
    },
    {
      value: "kategori 10",
      label:
        "10. Pasta (ikke fylt) Produktet skal inneholde minst 50 % fullkorn av produktets tørrstoffinnhold. Inneholder produktet grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter) eller rotfrukter, medregnes ikke den andelen av produktet som utgjøres av disse, ved beregningen av fullkornsmengden. Glutenfri pasta (ikke fylt) har ikke krav til fullkorn. Vilkårene gjelder for produktets tørrstoffinnhold.",
    },
  ];
  const selectMelkeprodukter = [
    {
      value: "kategori 11a",
      label:
        "11. a) Melk og syrnede melkeprodukter som er beregnet til å drikke, uten tilsatt smak. Tilsvarende laktosefrie produkter og laktosefrie melkedrikker omfattes også.",
    },
    {
      value: "kategori 11b",
      label:
        "11. b) Vegetabilske produkter med samme bruksområde som produkter i gruppe 11 a), uten tilsatt smak.",
    },
    {
      value: "kategori 12a",
      label:
        "12. a) Syrnede melkeprodukter som ikke er beregnet til å drikke, uten tilsatt smak. Tilsvarende laktosefrie produkter omfattes også.",
    },
    {
      value: "kategori 12b",
      label:
        "12. b) Vegetabilske produkter med samme bruksområde som produkter i gruppe 12 a), uten tilsatt smak.",
    },
    {
      value: "kategori 13a",
      label:
        "13. a) (Ikke vegetabilske) Syrnede melkeprodukter som ikke er beregnet til å drikke, med tilsatt smak. Tilsvarende laktosefrie produkter omfattes også.",
    },
    {
      value: "kategori 13b",
      label:
        "13. b) (Vegetabilske) Syrnede melkeprodukter som ikke er beregnet til å drikke, med tilsatt smak. Tilsvarende laktosefrie produkter omfattes også.",
    },
    {
      value: "kategori 14a",
      label:
        "14. a) (Ikke vegetabilske) Produkter som består av en blanding av melk og fløte med samme bruksområde som fløte og tilsvarende syrnede produkter, uten tilsatt smak. Tilsvarende laktosefrie produkter omfattes også.",
    },
    {
      value: "kategori 14b",
      label:
        "14. b) (Helt eller delvis vegetabilske) Produkter som består av en blanding av melk og fløte med samme bruksområde som fløte og tilsvarende syrnede produkter, uten tilsatt smak. Tilsvarende laktosefrie produkter omfattes også.",
    },
    {
      value: "kategori 15a",
      label:
        "15. a) (Ikke vegetabilske) Produkter som består av en blanding av melk og fløte med samme bruksområde som fløte og tilsvarende syrnede produkter, med tilsatt smak. Tilsvarende laktosefrie produkter omfattes også.",
    },
    {
      value: "kategori 15b",
      label:
        "15. b) (Helt eller delvis vegetabilske) Produkter som består av en blanding av melk og fløte med samme bruksområde som fløte og tilsvarende syrnede produkter, med tilsatt smak. Tilsvarende laktosefrie produkter omfattes også.",
    },
  ];

  const selectOst = [
    {
      value: "kategori 16",
      label:
        " 16. (Ikke vegetabilske) Oster, unntatt ferskoster og tilsvarende produkter. Produktene kan være tilsatt smak.",
    },
    {
      value: "kategori 17",
      label:
        "17. (Helt eller delvis vegetabilske) Oster, unntatt ferskoster og tilsvarende produkter. Produktene kan være tilsatt smak.",
    },
    {
      value: "kategori 18",
      label:
        "18. Ferskoster og tilsvarende produkter. Produktene kan være tilsatt smak.",
    },
  ];
  const selectMatfett = [
    {
      value: "kategori 19",
      label:
        "19. Matfett og matfettblandinger. Produktene kan være tilsatt smak.",
    },
    {
      value: "kategori 20",
      label:
        "20. Matoljer, flytende matfett og flytende matfettblandinger. Produktene kan være tilsatt smak.",
    },
  ];

  const selectFiskerivarer = [
    {
      value: "kategori 21",
      label:
        "21. Fiskerivarer og levende muslinger. Produktene kan være bearbeidede.",
    },
    {
      value: "kategori 22",
      label:
        "22. Produkter framstilt av minst 50 % foredlede fiskerivarer. Produktet kan inneholde saus eller lake. Prosentandelen og vilkårene gjelder for den delen av produktet som er beregnet til å spise. Produktet kan være panert, hvis tilberedningen ifølge produsentens anvisning, ikke tilfører produktet fett.",
    },
    {
      value: "kategori 22a",
      label:
        "22. a) Produkter som verken omfattes som påleggsprodukter, skivet, røkt eller gravet fisk, eller kaviar og andre halvkonserver av fisk.",
    },
    {
      value: "kategori 22b",
      label: "22. b) Påleggsprodukter, skivet.",
    },
    {
      value: "kategori 22c",
      label: "22. c) Røkt eller gravet fisk.",
    },
    {
      value: "kategori 22d",
      label: "22. d) Kaviar og andre halvkonserver av fisk.",
    },
  ];

  const selectKjøtt = [
    {
      value: "kategori 23",
      label: "23. Kjøtt som er uforedlet.",
    },
    {
      value: "kategori 24",
      label:
        "24. Kjøtt og produkter som inneholder kjøtt. Minst 50 % av produktet skal være framstilt av kjøtt, korn (100 % fullkorn), grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter) eller rotfrukter. Innholdet av kjøtt skal likevel være minst 20 % av produktet. Dette gjelder ikke for leverpostei som skal inneholde minst 35 % kjøtt. Produktet kan inneholde saus eller lake. Prosentandelen og vilkårene gjelder for den delen av produktet som er beregnet til å spise. Produktet kan være panert, hvis tilberedningen ifølge produsentens anvisning, ikke tilfører produktet fett.",
    },
    {
      value: "kategori 24a",
      label:
        "24. a) Rå produkter av hele eller utskårne kjøttstykker som er overflatemarinert eller krydret. -for stikksaltede produkter likevel",
    },
    {
      value: "kategori 24b",
      label:
        "24. b) Rå eller spiseklare produkter som inneholder kvernet kjøtt. - for pølser likevel – for påleggspølser likevel – for karbonadedeig likevel",
    },
    {
      value: "kategori 24c",
      label:
        "24. c) Spiseklare eller røkte produkter som inneholder helt eller utskåret kjøtt, og som ikke omfattes som rå produkter av hele eller utskårne kjøttstykker som er overflatemarinert eller krydret. – for påleggsprodukter likevel",
    },
  ];

  const selectVegetabliske = [
    {
      value: "kategori 25",
      label:
        "25. Helt eller delvis vegetabilske produkter med samme anvendelsesområde som fiske- og kjøttprodukter i gruppene 22 og 24. Produktet skal bestå av minst 50 % korn (100 % fullkorn), grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter), rotfrukter eller ikke-animalsk protein. Produktet skal ikke inneholde kjøtt eller fiskerivarer. Produktet kan inneholde saus eller lake. Prosentandelen og vilkårene gjelder for den delen av produktet som er beregnet til å spise. Produktet kan være panert, hvis tilberedningen ifølge produsentens anvisning, ikke tilfører produktet fett.",
    },
    {
      value: "kategori 25a",
      label: "25. a) Skivede påleggsprodukter",
    },
    {
      value: "kategori 25b",
      label: "25. b) For øvrige produkter ",
    },
  ];

  const selectFerdig = [
    {
      value: "kategori 26",
      label:
        "26. Ferdigretter med grønnsaker, en proteindel og en karbohydratdel. Produkter med: – minst 28 g grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter), rotfrukter eller frukt og bær per 100 g produkt, – en proteindel, og – en karbohydratdel, og som ikke er omfattet av gruppene 27, 28, 29, eller 30. Hvis rettens karbohydratdel inneholder korn, skal denne delen oppfylle kravet til fullkorn som er gitt i den relevante næringsmiddelgruppen. Hvis glutenfri pasta inngår i retten, gjelder kravet til kostfiber i gruppe 10.",
    },
    {
      value: "kategori 27",
      label:
        "27. Ferdigretter med grønnsaker og eventuelt en proteindel eller en karbohydratdel. Produkter med: – minst 50 g grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter), rotfrukter eller frukt og bær per 100 g produkt, og eventuelt – en proteindel, eller – en karbohydratdel. Hvis retten inneholder en korndel, skal denne oppfylle kravet til fullkorn som er gitt i den relevante næringsmiddelgruppen. Hvis glutenfri pasta inngår, gjelder kravet til kostfiber i gruppe 10.",
    },
    {
      value: "kategori 28",
      label:
        "28. Piroger, pizzaer, vårruller, andre paier enn dessertpaier og lignende produkter. Produktet skal inneholde minst 28 g grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter), rotfrukter, eller frukt og bær per 100 g produkt. Inneholder produktet en korndel, skal denne inneholde minst 30 % fullkorn beregnet ut fra korndelens tørrstoffinnhold. Inneholder produktet minst 50 % grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter), rotfrukter, eller frukt og bær per 100 g produkt, skal produktets eventuelle korndel inneholde minst 15 % fullkorn beregnet ut fra korndelens tørrstoffinnhold. Er korndelen glutenfri, skal den inneholde minst 10 % fullkorn, beregnet ut fra korndelens tørrstoffinnhold.",
    },
    {
      value: "kategori 29",
      label:
        "29. Smørbrød, bagetter, wraps og lignende produkter. Produktet skal inneholde minst 25 g grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter), rotfrukter eller frukt og bær per 100 g produkt. Inneholder produktet en korndel, skal denne inneholde minst 30 % fullkorn, beregnet ut fra korndelens tørrstoffinnhold. Inneholder produktet minst 50 % grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter), rotfrukter eller frukt og bær per 100 g produkt, skal produktets eventuelle korndel inneholde minst 15 % fullkorn beregnet ut fra korndelens tørrstoffinnhold. Er korndelen glutenfri, skal den inneholde minst 10 % fullkorn, beregnet ut fra korndelens tørrstoffinnhold.",
    },
    {
      value: "kategori 30",
      label:
        "30. Supper. Produktet skal inneholde minst 35 g grønnsaker (unntatt poteter), belgvekster (unntatt peanøtter), rotfrukter eller frukt og bær per 100 g suppe. Inneholder produktet en korndel, skal denne oppfylle kravet til fullkorn som er gitt i den relevante næringsmiddelgruppen. Hvis glutenfri pasta inngår, gjelder kravet til kostfiber i gruppe 10.",
    },
  ];

  const selectDressinger = [
    {
      value: "kategori 31",
      label:
        "31. Dressinger av olje og eddik. Produktene kan være tilsatt smak.",
    },
    {
      value: "kategori 32",
      label:
        "32. Sauser til middagsretter (ferdige produkter og produkter tilberedt ifølge produsentens anvisning).",
    },
  ];

  const [selectsGroup, setSelectGroups] = useState("");

  const [selectsProduct, setSelectProduct] = useState("");

  const handlerGroup = (event) => {
    setSelectGroups(event.value);
  };

  const handlerProduct = (event) => {
    setSelectProduct(event.value);
  };

  return (
    <div className="vstack gap-3 container">
      <HeaderCalculator />

      <div className="row">
        <div className="col-md-6">
          <h3>Legg inn næringsinnhold</h3>

          <label for="matnavn" class="form-label">
            <strong>Matvarenavn</strong>
          </label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-describedby="matnavn"
            />
          </div>

          <label for="matgruppe" class="form-label">
            <strong>Matvaregruppe</strong>
          </label>
          <Select
            placeholder={<div>Velg matvaregruppe</div>}
            className="form-select-md mb-3"
            onChange={handlerGroup}
            options={selectOption}
          />

          {selectsGroup === "grønnsaker, frukt, bær og nøtter" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectGrønnsaker}
              />
            </div>
          )}

          {selectsGroup === "mel, gryn og ris" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectMel}
              />
            </div>
          )}

          {selectsGroup === "grøt, brød og pasta" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectGrøt}
              />
            </div>
          )}

          {selectsGroup ===
            "melk, syrnede melkeprodukter og vegetabilske alternativer" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectMelkeprodukter}
              />
            </div>
          )}

          {selectsGroup === "ost og vegetabilske alternativer" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectOst}
              />
            </div>
          )}

          {selectsGroup === "matfett og oljer" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectMatfett}
              />
            </div>
          )}

          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectFiskerivarer}
              />
            </div>
          )}

          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectKjøtt}
              />
            </div>
          )}

          {selectsGroup === "helt eller delvis vegetabilske produkter" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectVegetabliske}
              />
            </div>
          )}

          {selectsGroup === "ferdigretter" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectFerdig}
              />
            </div>
          )}

          {selectsGroup === "dressinger og sauser" && (
            <div>
              <label for="mat" class="form-label">
                <strong>Matkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg mat</div>}
                className="form-select-md mb-3"
                onChange={handlerProduct}
                options={selectDressinger}
              />
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h3>Mulige ernærings- og helsepåstander</h3>
          <p>
            Trykk på "søk"-knappen for å se resultatet. Først må du sette
            ernæringsverdiene inne i ernæringskolonnen. Resultatet vises på
            høyre side. Hvis en "feil" oppstår, hold musepekeren over feilikonet
            i venstre kolonne for å se detaljene om den spesifikke feilen.
          </p>
        </div>

        <div>
          {selectsGroup === "grønnsaker, frukt, bær og nøtter" &&
            selectsProduct === "kategori 1" && <Kategori1 />}
          {selectsGroup === "grønnsaker, frukt, bær og nøtter" &&
            selectsProduct === "kategori 2" && <Kategori2 />}

          {selectsGroup === "grønnsaker, frukt, bær og nøtter" &&
            selectsProduct === "kategori 3" && <Kategori3 />}
          {selectsGroup === "mel, gryn og ris" &&
            selectsProduct === "kategori 4" && <Kategori4 />}
          {selectsGroup === "mel, gryn og ris" &&
            selectsProduct === "kategori 5" && <Kategori5 />}
          {selectsGroup === "mel, gryn og ris" &&
            selectsProduct === "kategori 6" && <Kategori6 />}
          {selectsGroup === "grøt, brød og pasta" &&
            selectsProduct === "kategori 7" && <Kategori7 />}
          {selectsGroup === "grøt, brød og pasta" &&
            selectsProduct === "kategori 8a" && <Kategori8a />}
          {selectsGroup === "grøt, brød og pasta" &&
            selectsProduct === "kategori 8b" && <Kategori8b />}
          {selectsGroup === "grøt, brød og pasta" &&
            selectsProduct === "kategori 9" && <Kategori9 />}
          {selectsGroup === "grøt, brød og pasta" &&
            selectsProduct === "kategori 10" && <Kategori10 />}
          {selectsGroup ===
            "melk, syrnede melkeprodukter og vegetabliske alternativer" &&
            selectsProduct === "kategori 11a" && <Kategori11a />}
          {selectsGroup ===
            "melk, syrnede melkeprodukter og vegetabliske alternativer" &&
            selectsProduct === "kategori 11b" && <Kategori11b />}
          {selectsGroup ===
            "melk, syrnede melkeprodukter og vegetabliske alternativer" &&
            selectsProduct === "kategori 12a" && <Kategori12a />}
          {selectsGroup ===
            "melk, syrnede melkeprodukter og vegetabliske alternativer" &&
            selectsProduct === "kategori 12b" && <Kategori12b />}
          {selectsGroup ===
            "melk, syrnede melkeprodukter og vegetabliske alternativer" &&
            selectsProduct === "kategori 13a" && <Kategori13a />}
          {selectsGroup ===
            "melk, syrnede melkeprodukter og vegetabliske alternativer" &&
            selectsProduct === "kategori 13b" && <Kategori13b />}
          {selectsGroup ===
            "melk, syrnede melkeprodukter og vegetabliske alternativer" &&
            selectsProduct === "kategori 14a" && <Kategori14a />}
          {selectsGroup ===
            "melk, syrnede melkeprodukter og vegetabliske alternativer" &&
            selectsProduct === "kategori 14b" && <Kategori14b />}
          {selectsGroup ===
            "melk, syrnede melkeprodukter og vegetabliske alternativer" &&
            selectsProduct === "kategori 15a" && <Kategori15a />}
          {selectsGroup ===
            "melk, syrnede melkeprodukter og vegetabliske alternativer" &&
            selectsProduct === "kategori 15b" && <Kategori15b />}
          {selectsGroup === "ost og vegetabilske alternativer" &&
            selectsProduct === "kategori 16" && <Kategori16 />}
          {selectsGroup === "ost og vegetabilske alternativer" &&
            selectsProduct === "kategori 17" && <Kategori17 />}
          {selectsGroup === "ost og vegetabilske alternativer" &&
            selectsProduct === "kategori 18" && <Kategori18 />}
          {selectsGroup === "matfett og oljer" &&
            selectsProduct === "kategori 19" && <Kategori19 />}
          {selectsGroup === "matfett og oljer" &&
            selectsProduct === "kategori 20" && <Kategori20 />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 21" && <Kategori21 />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 22" && <Kategori22 />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 22a" && <Kategori22a />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 22b" && <Kategori22b />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 22c" && <Kategori22c />}
          {selectsGroup === "fiskerivarer og produkter av fiskerivarer" &&
            selectsProduct === "kategori 22d" && <Kategori22d />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 23" && <Kategori23 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" && <Kategori24 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24a" && <Kategori24a />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24b" && <Kategori24b />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24c" && <Kategori24c />}
          {selectsGroup === "helt eller delvis vegetabilske produkter" &&
            selectsProduct === "kategori 25" && <Kategori25 />}
          {selectsGroup === "helt eller delvis vegetabilske produkter" &&
            selectsProduct === "kategori 25a" && <Kategori25a />}
          {selectsGroup === "helt eller delvis vegetabilske produkter" &&
            selectsProduct === "kategori 25b" && <Kategori25b />}
          {selectsGroup === "ferdigretter" &&
            selectsProduct === "kategori 26" && <Kategori26 />}
          {selectsGroup === "ferdigretter" &&
            selectsProduct === "kategori 27" && <Kategori27 />}
          {selectsGroup === "ferdigretter" &&
            selectsProduct === "kategori 28" && <Kategori28 />}
          {selectsGroup === "ferdigretter" &&
            selectsProduct === "kategori 29" && <Kategori29 />}
          {selectsGroup === "ferdigretter" &&
            selectsProduct === "kategori 30" && <Kategori30 />}
          {selectsGroup === "dressinger og sauser" &&
            selectsProduct === "kategori 31" && <Kategori31 />}
          {selectsGroup === "dressinger og sauser" &&
            selectsProduct === "kategori 32" && <Kategori32 />}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
