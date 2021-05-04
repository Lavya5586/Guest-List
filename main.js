name_of_the_guest_array = [];

function submit()
{
    var GuestName = document.getElementById("guest_list").value;
    name_of_guest.push(GuestName);

    var display_guest_array = [];
  
    console.log(name_of_the_guest_array);

    console.log(display_guest_array);
    document.getElementById("display_name").value = display_guest_array;

    document.getElementById("display_name_guest").value = display_guest_array;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sort()
{
    name_of_the_guest_array.sort();
    console.log(name_of_the_guest_array);

    var display_guest_array_sorting = [];

    for (var k = 0; k < lenght_of_name_of_guest_array; k++) 
    {
        display_guest_array_sorting.push( name_of_the_guest_array[k]);
        console.log(display_guest_array_sorting);
    }

    document.getElementById("display_name_sorted").value = display_guest_array_sorting;
}

function search() {
    var s = document.getElementById("sorted").value;
    var found = 0;
    var j;
    for (j = 0; j < GuestName.length; j++) {
        if (s == GuestName[j]) {
            found = found+1;
        }
    }
    document.getElementById("ps").innerHTML = "name found" + found + "time/s";
    console.log("found name" + found + "time/s");
}