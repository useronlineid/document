document.addEventListener('DOMContentLoaded', function() {
    const inputs = [
        document.getElementById('input1'),
        document.getElementById('input2'),
        document.getElementById('input3'),
        document.getElementById('input4'),
        document.getElementById('input5'),
        document.getElementById('input6')
    ];

    const outputSection = document.getElementById('outputSection');
    const resultImage = document.getElementById('resultImage');

    document.getElementById('saveBtn').addEventListener('click', function() {
        const container = document.createElement('div');
        container.style.width = '1000px';
        container.style.height = '480px';
        container.style.fontFamily = 'TH Sarabun New, sans-serif';
        container.style.position = 'relative';
        container.style.backgroundColor = 'white';
        container.style.padding = '20px';

        inputs.forEach((input, index) => {
            const output = document.createElement('div');
            output.style.position = 'absolute';
            output.style.fontSize = '18px';
            output.style.color = (index === 5) ? 'red' : 'black';
            output.textContent = input.value;

            switch(index) {
                case 0:
                    output.style.top = '78px';
                    output.style.left = '310px';
                    break;
                case 1:
                    output.style.top = '122px';
                    output.style.left = '310px';
                    break;
                case 2:
                    output.style.top = '163px';
                    output.style.left = '310px';
                    break;
                case 3:
                    output.style.top = '210px';
                    output.style.left = '310px';
                    break;
                case 4:
                    output.style.top = '254px';
                    output.style.left = '310px';
                    break;
                case 5:
                    output.style.top = '297px';
                    output.style.left = '310px';
                    output.style.width = '400px';
                    output.style.whiteSpace = 'normal';
                    break;
            }
            container.appendChild(output);
        });

        html2canvas(container).then(canvas => {
            resultImage.src = canvas.toDataURL('image/png');
            outputSection.classList.remove('hidden');
        });

        document.body.innerHTML = '';
        document.body.appendChild(outputSection);
    });
});
