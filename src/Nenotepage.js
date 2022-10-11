{selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 a 1" && <Kategori24a1 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 a 2" && <Kategori24a2 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b 1" && <Kategori24b1 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b 2" && <Kategori24b2 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b 3" && <Kategori24b3 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b 4" && <Kategori24b4 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 c 1" && <Kategori24c1 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 c 2" && <Kategori24c2 />}


const SelectSub24 = [
    {
      value: "",
    },

    {
      value: "kategori 24 a 2",
      label:
        "24. a) Rå produkter av hele eller utskårne kjøttstykker som er overflatemarinert eller krydret. - for stikksaltede produkter likevel",
    },
    {
      value: "kategori 24 a 1",
      label:
        "24. a) Rå produkter av hele eller utskårne kjøttstykker som er overflatemarinert eller krydret. - for øvrige produkter",
    },

    {
      value: "kategori 24 b 2",
      label:
        "24. b) Rå eller spiseklare produkter som inneholder kvernet kjøtt. - for pølser likevel",
    },
    {
      value: "kategori 24 b 3",
      label:
        "24. b) Rå eller spiseklare produkter som inneholder kvernet kjøtt. - for påleggspølser likevel",
    },
    {
      value: "kategori 24 b 4",
      label:
        "24. b) Rå eller spiseklare produkter som inneholder kvernet kjøtt. - for karbonadedeig likevel",
    },
    {
      value: "kategori 24 b 1",
      label:
        "24. b) Rå eller spiseklare produkter som inneholder kvernet kjøtt. -for øvrige produkter",
    },

    {
      value: "kategori 24 c 2",
      label:
        "24. c) Spiseklare eller røkte produkter som inneholder helt eller utskåret kjøtt, og som ikke omfattes som rå produkter av hele eller utskårne kjøttstykker som er overflatemarinert eller krydret. - for påleggsprodukter likevel",
    },
    {
      value: "kategori 24 c 1",
      label:
        "24. c) Spiseklare eller røkte produkter som inneholder helt eller utskåret kjøtt, og som ikke omfattes som rå produkter av hele eller utskårne kjøttstykker som er overflatemarinert eller krydret.- for øvrige produkter.",
    },
  ];

const SelectSub24 = [
  {
    value: "",
  },

  {
    value: "kategori 24 a",
    label:
      "24. a) Rå produkter av hele eller utskårne kjøttstykker som er overflatemarinert eller krydret. - for øvrige produkter. ",
  },
  {
    value: "kategori 24 b",
    label:
      "24. b) Rå eller spiseklare produkter som inneholder kvernet kjøtt. -for øvrige produkter.",
  },

  {
    value: "kategori 24 c",
    label:
      "24. c) Spiseklare eller røkte produkter som inneholder helt eller utskåret kjøtt, og som ikke omfattes av gruppe 24 b). -for øvrige produkter.",
  },
];

 const SelectFragment24a = [
   {
     value: "",
   },
   {
     value: "kategori 24 a 2",
     label: "- for stikksaltede produkter likevel",
   },
   {
     value: "kategori 24 a 1",
     label: "- for øvrige produkter",
   },
 ];

 const SelectFragment24b = [
   {
     value: "",
   },
   {
     value: "kategori 24 b 2",
     label: "- for pølser likevel",
   },
   {
     value: "kategori 24 b 3",
     label: "- for påleggspølser likevel",
   },
   {
     value: "kategori 24 b 4",
     label: "- for karbonadedeig likevel",
   },
   {
     value: "kategori 24 b 1",
     label: "-for øvrige produkter",
   },
 ];

 const SelectFragment24c = [
   {
     value: "",
   },
   {
     value: "kategori 24 c 2",
     label: "- for påleggsprodukter likevel",
   },
   {
     value: "kategori 24 c 1",
     label: "- for øvrige produkter.",
   },
 ];

   const [selectsGroup, setSelectGroups] = useState("");

   const [selectsProduct, setSelectProduct] = useState("");

   const [selectsFragment, setSelectFragment] = useState("");

 const [selectsRation, setSelectRation] = useState("");


  const handlerGroup = (event) => {
    setSelectGroups(event.value);
  };

  const handlerProduct = (event) => {
    setSelectProduct(event.value);
  };

  const handlerFragment = (event) => {
    setSelectFragment(event.value);
  };


 const handlerRation = (event) => {
   setSelectRation(event.value);
 };

 // <label for="matgruppe" class="form-label">
            <strong>Matvaregruppe</strong>
          </label>
          <Select
            placeholder={<div>Velg matvaregruppe</div>}
            className="form-select-md mb-3"
            onChange={handlerGroup}
            options={selectOption}
          />

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


          {selectsProduct === "kategori 24" && (
            <div>
              <label for="matdivision" class="form-label">
                <strong>Undermatkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg undermatkategori</div>}
                className="form-select-md mb-3"
                onChange={handlerFragment}
                options={SelectSub24}
              />
            </div>
          )}

            {selectsFragment === "kategori 24 a" && (
            <div>
              <label for="matration" class="form-label">
                <strong>Undermatkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg undermatkategori</div>}
                className="form-select-md mb-3"
                onChange={handlerRation}
                options={SelectFragment24a}
              />
            </div>
          )}

          {selectsFragment === "kategori 24 b" && (
            <div>
              <label for="matration" class="form-label">
                <strong>Undermatkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg undermatkategori</div>}
                className="form-select-md mb-3"
                onChange={handlerRation}
                options={SelectFragment24b}
              />
            </div>
          )}

          {selectsFragment === "kategori 24 c" && (
            <div>
              <label for="matration" class="form-label">
                <strong>Undermatkategori</strong>
              </label>
              <Select
                placeholder={<div>Velg undermatkategori</div>}
                className="form-select-md mb-3"
                onChange={handlerRation}
                options={SelectFragment24c}
              />
            </div>
          )}



          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "" && <Kategori0 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 a" &&
            selectsRation === "" && <Kategori0 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 a" &&
            selectsRation === "kategori 24 a 1" && <Kategori24a1 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 a" &&
            selectsRation === "kategori 24 a 2" && <Kategori24a2 />}

          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b" &&
            selectsRation === "" && <Kategori0 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b" &&
            selectsRation === "kategori 24 b 1" && <Kategori24b1 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b" &&
            selectsRation === "kategori 24 b 2" && <Kategori24b2 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b" &&
            selectsRation === "kategori 24 b 3" && <Kategori24b3 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 b" &&
            selectsRation === "kategori 24 b 4" && <Kategori24b4 />}

          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 c" &&
            selectsRation === "" && <Kategori0 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 c" &&
            selectsRation === "kategori 24 c 1" && <Kategori24c1 />}
          {selectsGroup === "kjøtt og produkter som inneholder kjøtt" &&
            selectsProduct === "kategori 24" &&
            selectsFragment === "kategori 24 c" &&
            selectsRation === "kategori 24 c 2" && <Kategori24c2 />}