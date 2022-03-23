		if(event.skill.id==backstab_id) {
			clearTimeout(isCD_backstab_timeOut)
			isCD_backstab = true
			isCD_backstab_timeOut = setTimeout(function () {
				isCD_backstab = false
			}, event.cooldown)
		}
		if(event.skill.id==herald_id) {
			clearTimeout(isCD_herald_timeOut)
			isCD_herald = true
			isCD_herald_timeOut = setTimeout(function () {
				isCD_herald = false
			}, event.cooldown)
		}
		if(event.skill.id==gungnir_id) {
			clearTimeout(isCD_gungnir_timeOut)
			isCD_gungnir = true
			isCD_gungnir_timeOut = setTimeout(function () {
				isCD_gungnir = false
			}, event.cooldown)
		}
		if(event.skill.id==twilight_0_id) {
			clearTimeout(isCD_twilight_timeOut)
			isCD_twilight = true
			isCD_twilight_timeOut = setTimeout(function () {
				isCD_twilight = false
			}, event.cooldown)
		}
		if(event.skill.id==godsfall_id) {
			clearTimeout(isCD_godsfall_timeOut)
			isCD_godsfall = true
			isCD_godsfall_timeOut = setTimeout(function () {
				isCD_godsfall = false
			}, event.cooldown)
		}	
