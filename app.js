var mobiles = {
    Apple: {
      iphone11: {
        name: "Iphone11",
        ram: "5GB",
        rom: "68GB",
        Camera: "50px",
        price: "100,000",
      },
      iphone12: {
        name: "Iphone12",
        ram: "5GB",
        rom: "68GB",
        Camera: "52px",
        price: "150,000",
      },
      iphone14: {
        name: "Iphone14",
        ram: "5GB",
        rom: "68GB",
        Camera: "55px",
        price: "200,000",
      },
    },
    Samsung: {
      Samsung11: {
        name: "Samsung11",
        ram: "4GB",
        rom: "64GB",
        Camera: "35px",
        price: "70,000",
      },
      Samsung12: {
        name: "Samsung12",
        ram: "5GB",
        rom: "64GB",
        Camera: "38px",
        price: "90,000",
      },
      Samsung13: {
        name: "Samsung13",
        ram: "5GB",
        rom: "64GB",
        Camera: "44px",
        price: "110,000",
      },
    },
    Oppo: {
      Oppo11: {
        name: "Oppo11",
        ram: "4GB",
        rom: "60GB",
        Camera: "30px",
        price: "50,000",
      },
      Oppo12: {
        name: "Oppo12",
        ram: "4GB",
        rom: "64GB",
        Camera: "35px",
        price: "65,000",
      },
      Oppo13: {
        name: "Oppo13",
        ram: "4GB",
        rom: "64GB",
        Camera: "42px",
        price: "90,000",
      },
    },
    Vivo: {
      VivoY20: {
        name: "VivoY20",
        ram: "4GB",
        rom: "64GB",
        Camera: "13px",
        price: "26,000",
      },
      VivoY21: {
        name: "VivaY21",
        ram: "4GB",
        rom: "64GB",
        Camera: "22px",
        price: "43,000",
      },
      VivoY55: {
        name: "VivoY55",
        ram: "4GB",
        rom: "128GB",
        Camera: "50px",
        price: "68,000",
      },
    },
  };

  var paragraph = document.getElementById("para");

  var ask = prompt("Enter the company");
  var ask2 = prompt("Enter the Model");

  function render() {
    var company = mobiles[ask];
    if (company) {
      var model = company[ask2];
      if (model) {
        paragraph.innerHTML = `
          Name: ${model.name}<br>
          RAM: ${model.ram}<br>
          ROM: ${model.rom}<br>
          Camera: ${model.Camera}<br>
          Price: ${model.price}
        `;
      } else {
        paragraph.innerHTML = "Model not found.";
      }
    } else {
      paragraph.innerHTML = "Company not found.";
    }
  }

  render();