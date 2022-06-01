function purchase(){
  let output = document.getElementById("output");
  let bread = parseFloat(document.getElementById("bread").value);
  let milk = parseFloat(document.getElementById("milk").value);
  let cheese = parseFloat(document.getElementById("cheese").value);

  console.log(bread);
  let breadtotal = 2.99 * bread;
  console.log(breadtotal.toFixed(2));

  console.log(milk);
  let milktotal = 4.99 * milk;
  console.log(milktotal.toFixed(2));

  console.log(cheese);
  let cheesetotal = 1.99 * cheese;
  console.log(cheesetotal.toFixed(2));

  let Subtotal = breadtotal + milktotal + cheesetotal;
  let total = Subtotal + (Subtotal - (Subtotal * 0.8875));
  let items = bread + milk + cheese;

  let build = ``;
  build += "<hr>";
  build += `Bread ($2.99) x ${bread} = $${breadtotal.toFixed(2)}`;
  build += `<br>`;
  build += `Milk ($4.99) x ${milk} =  $${milktotal.toFixed(2)}`;
  build += `<br>`;
  build += `Cheese ($1.99) x ${cheese} =  $${cheesetotal.toFixed(2)}`;
  build += "<hr>";
  build += `Total Amount of Items Purchased: ${items}`;
  build += `<br>`;
  build += `Subtotal = $${Subtotal.toFixed(2)}`;
  build += `<br>`;
  build += `Total = $${total.toFixed(2)}`;
  output.innerHTML = build;
}