document.getElementById('numLights').addEventListener('input', function() {
    const numLights = document.getElementById('numLights').value;
    const lightInputs = document.getElementById('lightInputs');

    // Mevcut ışık girişlerini temizle
    lightInputs.innerHTML = '';

    for (let i = 0; i < numLights; i++) {
        const lightDiv = document.createElement('div');
        lightDiv.className = 'light-input';

        // Aydınlatma ismi girişi
        const nameLabel = document.createElement('label');
        nameLabel.textContent = `Aydınlatma ${i + 1} - İsim:`;

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = `lightName${i + 1}`;
        nameInput.required = true;

        // Anahtar türü seçimi
        const switchLabel = document.createElement('label');
        switchLabel.textContent = `Aydınlatma ${i + 1} - Anahtar türü:`;

        const switchSelect = document.createElement('select');
        switchSelect.name = `switchType${i + 1}`;
        switchSelect.required = true;

        const optionNormal = document.createElement('option');
        optionNormal.value = 'normal';
        optionNormal.textContent = 'Normal Switch';

        const optionImpulse = document.createElement('option');
        optionImpulse.value = 'impulse';
        optionImpulse.textContent = 'Impulse Anahtar';

        switchSelect.appendChild(optionNormal);
        switchSelect.appendChild(optionImpulse);

        lightDiv.appendChild(nameLabel);
        lightDiv.appendChild(nameInput);
        lightDiv.appendChild(switchLabel);
        lightDiv.appendChild(switchSelect);
        lightInputs.appendChild(lightDiv);
    }
});

document.getElementById('numShutters').addEventListener('input', function() {
    const numShutters = document.getElementById('numShutters').value;
    const shutterInputs = document.getElementById('shutterInputs');

    // Mevcut panjur girişlerini temizle
    shutterInputs.innerHTML = '';

    for (let i = 0; i < numShutters; i++) {
        const shutterDiv = document.createElement('div');
        shutterDiv.className = 'shutter-input';

        // Panjur ismi girişi
        const nameLabel = document.createElement('label');
        nameLabel.textContent = `Panjur ${i + 1} - İsim:`;

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = `shutterName${i + 1}`;
        nameInput.required = true;

        // Anahtar türü seçimi
        const switchLabel = document.createElement('label');
        switchLabel.textContent = `Panjur ${i + 1} - Anahtar türü:`;

        const switchSelect = document.createElement('select');
        switchSelect.name = `shutterSwitchType${i + 1}`;
        switchSelect.required = true;

        const optionNormal = document.createElement('option');
        optionNormal.value = 'normal';
        optionNormal.textContent = 'Normal Switch';

        const optionImpulse = document.createElement('option');
        optionImpulse.value = 'impulse';
        optionImpulse.textContent = 'Impulse Anahtar';

        switchSelect.appendChild(optionNormal);
        switchSelect.appendChild(optionImpulse);

        shutterDiv.appendChild(nameLabel);
        shutterDiv.appendChild(nameInput);
        shutterDiv.appendChild(switchLabel);
        shutterDiv.appendChild(switchSelect);
        shutterInputs.appendChild(shutterDiv);
    }
});

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const numLights = document.getElementById('numLights').value;
    const lights = [];
    for (let i = 0; i < numLights; i++) {
        const lightName = document.querySelector(`input[name="lightName${i + 1}"]`).value;
        const switchType = document.querySelector(`select[name="switchType${i + 1}"]`).value;
        lights.push({ name: lightName, type: switchType });
    }

    const numShutters = document.getElementById('numShutters').value;
    const shutters = [];
    for (let i = 0; i < numShutters; i++) {
        const shutterName = document.querySelector(`input[name="shutterName${i + 1}"]`).value;
        const switchType = document.querySelector(`select[name="shutterSwitchType${i + 1}"]`).value;
        shutters.push({ name: shutterName, type: switchType });
    }

    const controls = [];
    document.querySelectorAll('input[name="controls"]:checked').forEach(control => {
        controls.push(control.value);
    });

    const security = [];
    document.querySelectorAll('input[name="security"]:checked').forEach(sensor => {
        security.push(sensor.value);
    });

    console.log('Aydınlatmalar:', lights);
    console.log('Panjurlar:', shutters);
    console.log('Kontroller:', controls);
    console.log('Güvenlik:', security);

    // config.json olayı burada başlar
});
