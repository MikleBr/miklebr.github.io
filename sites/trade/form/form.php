<html>

<head>
    <title>Форма заявки с сайта</title>
</head>

<body>
    <?php


    $subject = "Оставлена заявка!";

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $mail = $_POST['email'];

        $name = $_POST['name'];
        $mail = $_POST['email'];

        $file = fopen('form.txt', 'a+');

        $message = "<p>Добрый день, " . $name . " !😈</p>

<p>Мы снова запускаем обновлённое обучение от нашей команды 001k с бонусами и скидкой.<br>
Теперь онлайн-курс будет сопровождаться собственными ментором, который закрепит ваши теоретические знания и доведёт на практике до профитных сделок. Данный бонус мы вводим впервые и хотим показать своим ученикам, что наши знания и стратегии помогут любому, кто не знаком с трейдингом на рынке криптовалют!</p>

<p>Интенсив рассчитан на 10 теоретических занятий по 2 часа + 5 практических занятий по 2 часа. Дату и время проведения курса вы лично обсудите со своим ментором, который подстроится под наиболее удобный для вас режим.</p>

<p>На данный момент остались последние 9 мест до запуска, на которые действует акция — 500$ (вместо стандартных 700$). По текущему курсу это:<br>
0,043 BTC<br>
1,15 ETH</p>

<p>Оплата с автоматическим бронированием места производится по реквизитам ниже:<br>
Кошелек BTC 1DfuzpdAqBooAQSJNHiybYCENcobZA4pwp<br>
Кошелек ETH 0xB8ba6d4CA76B5704c283197b84fCfB82Ee38A6cf</p>

<p>После оплаты вам необходимо скинуть ссылку или скриншот с вашей транзакцией BTC или ETH на адрес: pay@001k.trading<br>
В течение 24 часов с момента отправки письма на указанный адрес, с Вами по почте свяжется ваш личный куратор.</p>

<p>Спасибо, что выбираете нас! С любовью, Себек и Серёжа 001k❤️</p>";

        $headers = "From: 001k \r\n Content-type: text/html; charset=utf-8 \r\n";

        fputs($file, "Имя:" . $name . " Почта:" . $mail . "\r\n");

        if (mail($mail, $subject, $message, $headers)) {
            include 'succes.html';
        } else {
            include 'error.html';
        }


        fclose($file);
    }
    ?>

</body>

</html>