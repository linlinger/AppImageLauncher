/********************************************************************************
** Form generated from reading UI file 'remove.ui'
**
** Created by: Qt User Interface Compiler version 5.15.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_REMOVE_H
#define UI_REMOVE_H

#include <QtCore/QLocale>
#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QDialogButtonBox>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QVBoxLayout>
#include <QPushButton>
#include <QTranslator>

QT_BEGIN_NAMESPACE

class Ui_RemoveDialog
{
public:
    QGridLayout *gridLayout;
    QVBoxLayout *verticalLayout;
    QLabel *messageLabel;
    QLabel *pathLabel;
    QDialogButtonBox *buttonBox;

    void setupUi(QDialog *RemoveDialog)
    {
        if (RemoveDialog->objectName().isEmpty())
            RemoveDialog->setObjectName(QString::fromUtf8("移除Appimage"));
        RemoveDialog->setWindowModality(Qt::WindowModal);
        RemoveDialog->resize(415, 96);
        RemoveDialog->setLocale(QLocale(QLocale::English, QLocale::UnitedStates));
        RemoveDialog->buttonBox->button(QDialogButtonBox::Ok)->setText(tr("确定"));
        RemoveDialog->buttonBox->button(QDialogButtonBox::Cancel)->setText(tr("取消"));
        gridLayout = new QGridLayout(RemoveDialog);
        gridLayout->setObjectName(QString::fromUtf8("gridLayout"));
        verticalLayout = new QVBoxLayout();
        verticalLayout->setObjectName(QString::fromUtf8("verticalLayout"));
        verticalLayout->setSizeConstraint(QLayout::SetMinimumSize);
        messageLabel = new QLabel(RemoveDialog);
        messageLabel->setObjectName(QString::fromUtf8("messageLabel"));
        messageLabel->setAlignment(Qt::AlignLeading|Qt::AlignLeft|Qt::AlignTop);

        verticalLayout->addWidget(messageLabel);

        pathLabel = new QLabel(RemoveDialog);
        pathLabel->setObjectName(QString::fromUtf8("pathLabel"));
        QSizePolicy sizePolicy(QSizePolicy::Preferred, QSizePolicy::Minimum);
        sizePolicy.setHorizontalStretch(0);
        sizePolicy.setVerticalStretch(0);
        sizePolicy.setHeightForWidth(pathLabel->sizePolicy().hasHeightForWidth());
        pathLabel->setSizePolicy(sizePolicy);
        pathLabel->setMinimumSize(QSize(389, 0));
        pathLabel->setWordWrap(true);

        verticalLayout->addWidget(pathLabel);

        buttonBox = new QDialogButtonBox(RemoveDialog);
        buttonBox->setObjectName(QString::fromUtf8("buttonBox"));
        buttonBox->setOrientation(Qt::Horizontal);
        buttonBox->setStandardButtons(QDialogButtonBox::Cancel|QDialogButtonBox::Ok);

        verticalLayout->addWidget(buttonBox);


        gridLayout->addLayout(verticalLayout, 0, 0, 1, 1);


        retranslateUi(RemoveDialog);
        QObject::connect(buttonBox, SIGNAL(accepted()), RemoveDialog, SLOT(accept()));
        QObject::connect(buttonBox, SIGNAL(rejected()), RemoveDialog, SLOT(reject()));

        QMetaObject::connectSlotsByName(RemoveDialog);
    } // setupUi

    void retranslateUi(QDialog *RemoveDialog)
    {
        RemoveDialog->setWindowTitle(QCoreApplication::translate("RemoveDialog", "Delete AppImage", nullptr));
        messageLabel->setText(QCoreApplication::translate("RemoveDialog", "<html><head/><body><p>\346\230\257\345\220\246\347\247\273\351\231\244\346\255\244Appimage\357\274\237</p></body></html>", nullptr));
        pathLabel->setText(QCoreApplication::translate("RemoveDialog", "%1", nullptr));
    } // retranslateUi

};

namespace Ui {
    class RemoveDialog: public Ui_RemoveDialog {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_REMOVE_H
