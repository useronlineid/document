document.addEventListener('DOMContentLoaded', function() {
    const inputs = [
        document.getElementById('input1'),
        document.getElementById('input2'),
        document.getElementById('input3'),
        document.getElementById('input4'),
        document.getElementById('input5'),
        document.getElementById('input6')
    ];

    const saveBtn = document.getElementById('saveBtn');

    saveBtn.addEventListener('click', function() {
        const container = document.createElement('div');
        container.style.width = '1000px';
        container.style.height = '480px';
        container.style.fontFamily = 'TH Sarabun New, sans-serif';
        container.style.position = 'relative';
        container.style.backgroundColor = 'white';
        container.style.padding = '20px';

        const data = [
            { value: inputs[0].value, style: { top: '78px', left: '310px', color: 'black' } },
            { value: inputs[1].value, style: { top: '122px', left: '310px', color: 'black' } },
            { value: inputs[2].value, style: { top: '163px', left: '310px', color: 'black' } },
            { value: inputs[3].value, style: { top: '210px', left: '310px', color: 'black' } },
            { value: inputs[4].value, style: { top: '254px', left: '310px', color: 'black' } },
            { value: inputs[5].value, style: { top: '297px', left: '310px', color: 'red', width: '400px', whiteSpace: 'normal' } },
        ];

        data.forEach(item => {
            const output = document.createElement('div');
            output.style.position = 'absolute';
            output.style.fontSize = '18px';
            output.style.top = item.style.top;
            output.style.left = item.style.left;
            output.style.color = item.style.color;
            output.style.width = item.style.width || 'auto';
            output.style.whiteSpace = item.style.whiteSpace || 'nowrap';
            output.textContent = item.value;
            container.appendChild(output);
        });

        document.body.appendChild(container);

        html2canvas(container).then(canvas => {
            document.body.removeChild(container);
            const image = new Image();
            image.src = canvas.toDataURL('image/png');
            image.style.width = '100%';
            image.style.height = 'auto';

            const newWindow = window.open();
            newWindow.document.body.appendChild(image);
        });
    });
});
