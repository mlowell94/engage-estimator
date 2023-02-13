# What is this?

A companion tool for Fire Emblem: Engage that allows you to simulate character's stats once they've reached level cap built using React.

## What is Fire Emblem?

Fire Emblem is a popular TRPG franchise where players control individual units and direct them in combat against enemy units. Once units have fought in enough battles, they level up and increase their combat parameters.

## Leveling up

In Fire Emblem, characters do not have predetermined parameter boosts on level up. Instead, each character has growth rates for each stat. Growth rates are a number that determines the likelihood of a given stat raising when that character levels up. Classes also have smaller growth rates which are added to character growth rates to determine the actual growth rate. For example, if a character has a growth rate of 70 in Strength, and their class has a growth rate of 10 in Strength, that character has an 80% chance of gaining 1 point to their Strength stat upon leveling up. 

## What this app does

The nature of growth rates means that a character's stats are somewhat unpredictable. A problem I find when playing games in the franchise with large amounts of character customization is choosing what class a character should be -- especially when they have stats different from what their growth rates would suggest. This app assists in that decision making process by showing an averaged version of a character's stats at level 20 on every advanced class if they were to promote as they are now.

## How does it work?

When the user presses "Estimate" the app will take the current stat spread and character and level a stat to 20 (using Math.floor(Math.random() * 100)) 100 times, and then return the average. It will do this for every stat on every class the character can become. It then returns an array of those classes the user can click through (or select via the dropdown)

### Other Features 

* Chapter selection so you won't accidentally spoil yourself using the app!
* Character and class sprites!
    * Character sprites taken from fireemblemwiki.org
    * Class sprites ripped by me :)
* Mobile friendly!

### To-dos
* Add sprites for Lindon, Saphir
* Clean up sprites and normalize their width and height
* Add animations for prop and state change in results
* Add recommended Emblem lists for each class
