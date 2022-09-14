const searchTables = document.querySelectorAll("table[data-searchid]");

searchTables.forEach((searchableTable) => {
  const searchInputId = searchableTable.dataset.searchid;
  const searchInput = document.querySelector(`#${searchInputId}`);

  const searchTriggerElements = searchableTable.querySelectorAll(
    "[data-searchtrigger]"
  );

  const searchTriggerElementsArray = Array.from(searchTriggerElements);

  const searchTriggers = searchTriggerElementsArray.map((el) => {
    return {
      triggerString: el.dataset.searchtrigger,
      ownerRowEl: el.parentElement,
    };
  });

  const testMatchSubstring = (searchSubstring, input) => {
    const normalizedSearchSubstring = searchSubstring.toLowerCase();
    const normalizedInput = input.toLowerCase();

    if (normalizedSearchSubstring.startsWith(normalizedInput)) {
      return true;
    } else {
      return false;
    }
  };

  const testMatch = (searchTriggerString, input) => {
    const substrings = searchTriggerString.split(" ");

    for (const substring of substrings) {
      const isSubstringMatch = testMatchSubstring(substring, input);
      if (isSubstringMatch) {
        return true;
      }
    }

    return false;
  };

  const handleInput = (e) => {
    for (const searchTrigger of searchTriggers) {
      const newInput = e.target.value;

      const isMatch = testMatch(searchTrigger.triggerString, newInput);

      if (isMatch) {
        const row = searchTrigger.ownerRowEl;

        if (!searchableTable.contains(row)) {
          searchableTable.appendChild(row);
        }
      } else {
        searchTrigger.ownerRowEl.remove();
      }
    }
  };

  searchInput.addEventListener("input", handleInput);
});
